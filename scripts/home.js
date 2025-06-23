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

const gameTitle = document.getElementById("game-title");
const gameDescription = document.getElementById("game-description");
const gameTags = document.getElementById("game-tags");

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
    profileIcon.addEventListener("click", () =>
    {
        window.location.href = "/profile/";
    });
}

function initVolumeIcons()
{
    if (localStorage.getItem("isMute") === "true") volumeIcon.style.display = "none";
    else muteIcon.style.display = "none";
    
    volumeIcon.addEventListener("click", () =>
    {
        localStorage.setItem("isMute", "true");
        
        volumeIcon.style.display = "none";
        muteIcon.style.display = "block";
    });

    muteIcon.addEventListener("click", () =>
    {
        localStorage.setItem("isMute", "false");
        
        muteIcon.style.display = "none";
        volumeIcon.style.display = "block";
    })
}

function initLightIcons()
{
    if (localStorage.getItem("isLightMode") === "true") darkIcon.style.display = "none";
    else lightIcon.style.display = "none";

    lightIcon.addEventListener("click", () =>
    {
        toggleLightMode();

        lightIcon.style.display = "none";
        darkIcon.style.display = "block";
    });

    darkIcon.addEventListener("click", () =>
    {
        toggleLightMode();

        darkIcon.style.display = "none";
        lightIcon.style.display = "block";
    });
}

function initSettingsIcon()
{
    settingsIcon.addEventListener("click", () =>
    {
        settingsIcon.style.animation = "spin 1s ease-in-out";
    });

    settingsIcon.addEventListener("animationend", () =>
    {
        settingsIcon.style.animation = "none";
    });
}

function initPlayButton()
{
    playButton.addEventListener("click", () =>
    {
        document.body.style.pointerEvents = "none";
        playSound("sounds/play.wav");
        discContainer.classList.add("enter");
        document.querySelector(".active").style.scale = 1.1;

        discContainer.addEventListener("animationend", () =>
        {
            window.location.href = playButton.dataset.link;
            document.body.style.pointerEvents = "auto";
            discContainer.classList.remove("enter");
            document.querySelector(".active").style.scale = 1;
            document.querySelector(".selected").style.order = "0";

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

                    gameTitle.style.transform = "translateX(50vw)";
                    gameDescription.style.transform = "translateX(50vw)";
                    gameTags.style.transform = "translateX(50vw)";
                }
                else
                {
                    discContainer.style.transform = "translateY(-90vw) rotateX(20deg) rotateY(-30deg)";
                    
                    gameTitle.style.transform = "translateX(100vw)";
                    gameDescription.style.transform = "translateX(100vw)";
                    gameTags.style.transform = "translateX(100vw)";
                }

                games.forEach(item => item.classList.remove("selected"));
                game.classList.add("selected");

                backgroundImages.forEach(bgImage => bgImage.element.classList.remove("active"));
                backgroundImage.element.classList.add("active");

                setTimeout(() => 
                {
                    discImage.src = game.dataset.image;
                    gameTitle.textContent = game.dataset.name;
                    gameDescription.textContent = game.dataset.description;
                    
                    gameTitle.style.transform = "translateX(0vw)";
                    gameDescription.style.transform = "translateX(0vw)";
                    gameTags.style.transform = "translateX(0vw)";
                    
                    discContainer.style.transform = "translateY(0vh) rotateX(20deg) rotateY(-30deg)";
                }, 1000);
            }
        });

        game.addEventListener("mouseenter", () =>
        {
            hoveredGameTitle.style.opacity = "1";
            hoveredGameTitle.textContent = game.dataset.name;
            console.log(hoveredGameTitle.style.textContent);
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

    gameTitle.addEventListener("mouseenter", () =>
    {
        playSound("/sounds/game-title-hover.wav");
    });

    gameTags.addEventListener("transitionend", () =>
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