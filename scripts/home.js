// #region Classes

class BackgroundImage
{
    constructor(src)
    {
        this.src = src;

        this.element = document.createElement("div");
        this.element.className = "background-image";

        this.element.style.background = `url(${this.src}) center / cover no-repeat fixed`;

        document.body.appendChild(this.element);
    }
}

// #endregion

// #region Variables

let backgroundImages = [];

const blackFade = document.getElementById("black-fade");

const profileIcon = document.getElementById("profile-icon");
const shopIcon = document.getElementById("shop-icon");
const photoGalleryIcon = document.getElementById("photo-gallery-icon");
const volumeIcon = document.getElementById("volume-icon");
const muteIcon = document.getElementById("mute-icon");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");
const settingsIcon = document.getElementById("settings-icon");

const playButton = document.getElementById("play-button");

const clock = document.getElementById("clock");

const discContainer = document.getElementById("game-disc-container");
const discImage = document.getElementById("disc-image");

const gameInfo = document.getElementById("game-info");

const hoveredGameTitle = document.getElementById("hovered-game-title");

const games = document.querySelectorAll(".game");

let isTransitioning = false;

// #endregion

// #region Main

initIcons();
initPlayButton();
initClock();
initGameInfo();

// #endregion

// #region Functions

function initIcons()
{
    initProfileIcon();
    initVolumeIcons();
    initLightIcons();
    initSettingsIcon();
}

function initProfileIcon()
{    
    profileIcon.parentElement.addEventListener("click", () =>
    {
        window.location.href = "/profile/";
    });
}

function initVolumeIcons()
{
    if (localStorage.getItem("isMute") === "true") volumeIcon.parentElement.style.display = "none";
    else muteIcon.parentElement.style.display = "none";
    
    volumeIcon.parentElement.addEventListener("click", () =>
    {
        localStorage.setItem("isMute", "true");
        
        volumeIcon.parentElement.style.display = "none";
        muteIcon.parentElement.style.display = "block";
    });

    muteIcon.parentElement.addEventListener("click", () =>
    {
        localStorage.setItem("isMute", "false");
        
        muteIcon.parentElement.style.display = "none";
        volumeIcon.parentElement.style.display = "block";
    })
}

function initLightIcons()
{
    if (localStorage.getItem("isLightMode") === "true") darkIcon.parentElement.style.display = "none";
    else lightIcon.parentElement.style.display = "none";

    lightIcon.parentElement.addEventListener("click", () =>
    {
        toggleLightMode();

        lightIcon.parentElement.style.display = "none";
        darkIcon.parentElement.style.display = "block";
    });

    darkIcon.parentElement.addEventListener("click", () =>
    {
        toggleLightMode();

        darkIcon.parentElement.style.display = "none";
        lightIcon.parentElement.style.display = "block";
    });
}

function initSettingsIcon()
{
    settingsIcon.parentElement.addEventListener("click", () =>
    {
        settingsIcon.style.animation = "spin 1s ease-in-out";
    });

    settingsIcon.parentElement.addEventListener("animationend", () =>
    {
        settingsIcon.style.animation = "none";
    });
}

function initPlayButton()
{
    playButton.addEventListener("click", () =>
    {
        document.body.style.pointerEvents = "none";
        playSound("/sounds/play.wav");
        discContainer.classList.add("enter");
        document.querySelector(".active").style.scale = 1.1;

        discContainer.addEventListener("animationend", () =>
        {
            blackFade.style.opacity = "1";
        });

        blackFade.addEventListener("transitionend", () =>
        {
            window.location.href = playButton.dataset.link;
            document.body.style.pointerEvents = "auto";
            discContainer.classList.remove("enter");
            document.querySelector(".active").style.scale = 1;
            document.querySelector(".selected").style.order = "0";
            blackFade.style.opacity = "0";

            games.forEach(item =>
            {
                if (!item.classList.contains("selected")) item.style.order++;

                localStorage.setItem(item.dataset.name, item.style.order.toString());
            });
        });
    });
}

function initClock()
{
    let time = new Date();

    clock.textContent = time.toLocaleTimeString();

    setTimeout(initClock, 1000);
}

function initGameInfo()
{
    games.forEach(game =>
    {
        Array.from(game.children)[0].src = game.dataset.image;

        const backgroundImage = new BackgroundImage(game.dataset.bgImage);
        backgroundImages.push(backgroundImage);

        if (localStorage.getItem(game.dataset.name) !== null) game.style.order = localStorage.getItem(game.dataset.name);

        game.addEventListener("click", () =>
        {
            if (!game.classList.contains("selected") && !isTransitioning)
            {
                isTransitioning = true;
                playButton.dataset.link = "";

                if (window.innerWidth > 1079)
                {
                    discContainer.style.transform = "translateY(100vh) rotateX(20deg) rotateY(-30deg)";

                    Array.from(gameInfo.children).forEach((infoElement, index) =>
                    {
                        infoElement.style.transition = `all ${1 + index * 0.1}s cubic-bezier(0.175, 0.885, 0.32, 1.275)`;
                        infoElement.style.transform = "translateX(50vw)";
                    });
                }
                else
                {
                    discContainer.style.transform = "translateY(-150vw) rotateX(20deg) rotateY(-30deg)";

                    Array.from(gameInfo.children).forEach((infoElement, index) =>
                    {
                        infoElement.style.transition = `all ${1 + index * 0.1}s cubic-bezier(0.175, 0.885, 0.32, 1.275)`;
                        infoElement.style.transform = "translateX(100vw)";
                    });
                }

                games.forEach(item => item.classList.remove("selected"));
                game.classList.add("selected");

                backgroundImages.forEach(bgImage => bgImage.element.classList.remove("active"));
                backgroundImage.element.classList.add("active");

                setTimeout(() => 
                {
                    discImage.src = game.dataset.image;

                    gameInfo.children[0].textContent = game.dataset.name;
                    gameInfo.children[1].textContent = game.dataset.description;

                    Array.from(gameInfo.children).forEach(infoElement =>
                    {
                        infoElement.style.transform = "translateX(0vw)";
                    });
                    
                    discContainer.style.transform = "translateY(0vh) rotateX(20deg) rotateY(-30deg)";
                }, 1000);
            }
        });

        game.addEventListener("mouseenter", () =>
        {
            hoveredGameTitle.style.opacity = "1";
            hoveredGameTitle.textContent = game.dataset.name;
        });

        game.addEventListener("mouseleave", () =>
        {
            hoveredGameTitle.style.opacity = "0";
        });
    });

    if (games.length > 0)
    {
        const lowestOrderElement = Array.from(games).reduce((lowest, current) =>
        {
            const currentOrder = parseInt(current.style.order) || 0;
            const lowestOrder = parseInt(lowest.style.order) || 0;

            return currentOrder < lowestOrder ? current : lowest;
        });

        lowestOrderElement.click();
    }

    gameInfo.firstElementChild.addEventListener("mouseenter", () =>
    {
        playSound("/sounds/game-title-hover.wav");
    });

    gameInfo.lastElementChild.addEventListener("transitionend", () =>
    {
        isTransitioning = false;
        playButton.dataset.link = document.querySelector(".selected").dataset.link;
    });
}

function onResize()
{
    if (window.innerWidth > 1080)
        window.scrollTo({ top: 0, behavior: 'smooth' });
}

// #endregion

// #region Events

window.addEventListener("resize", onResize);

// #endregion