// #region Variables

const profileIcon = document.getElementById("profile-icon");
const volumeIcon = document.getElementById("volume-icon");
const muteIcon = document.getElementById("mute-icon");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");
const settingsIcon = document.getElementById("settings-icon");
const shopIcon = document.getElementById("shop-icon");
const libraryIcon = document.getElementById("library-icon");

const icons = [profileIcon, volumeIcon, muteIcon, lightIcon, darkIcon, settingsIcon, shopIcon, libraryIcon];

const playButton = document.getElementById("play-button");

const clock = document.getElementById("clock");

const discContainer = document.getElementById("game-disc-container");
const discImage = document.getElementById("disc-image");

const gameTitle = document.getElementById("game-title");
const gameDescription = document.getElementById("game-description");
const gameTags = document.getElementById("game-tags");

const shelfItems = document.querySelectorAll(".game-shelf-item");

let isTransitioning = false;

// #endregion

// #region Main

initializeIcons();
initializePlayButton();
initializeClock();
initializeGameInfo();

// #endregion

// #region Functions

function initializeIcons()
{
    icons.forEach(icon =>
    {
        icon.addEventListener("mouseenter", () =>
        {
            playSound("sounds/hover.wav");
        });
    });

    initializeProfileIcon();
    initializeVolumeIcons();
    initializeLightIcons();
    initializeSettingsIcon();
}

function initializeProfileIcon()
{
    profileIcon.addEventListener("click", () =>
    {
        window.location.href = "/profile/";
    });
}

function initializeVolumeIcons()
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

function initializeLightIcons()
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

function initializeSettingsIcon()
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

function initializePlayButton()
{
    playButton.addEventListener("mouseenter", () =>
    {
        playSound("sounds/hover.wav");
    });

    playButton.addEventListener("click", () =>
    {
        playSound("sounds/play.wav");
        discContainer.classList.add("enter");

        discContainer.addEventListener("animationend", () =>
        {
            window.location.href = playButton.dataset.link;
            discContainer.classList.remove("enter");
            document.querySelector(".selected").style.order = "0";

            shelfItems.forEach(item =>
            {
                if (!item.classList.contains("selected")) item.style.order++;

                localStorage.setItem(item.dataset.name, item.style.order.toString());
            });
        });
    });
}

function initializeClock()
{
    let time = new Date();

    clock.textContent = time.toLocaleTimeString();

    setTimeout(initializeClock, 1000);
}

function initializeGameInfo()
{
    shelfItems.forEach(item =>
    {
        // const img = item.dataset.image;

        // if (img)
        // {
        //     item.style.backgroundImage = `url(${img})`;
        // }

        if (localStorage.getItem(item.dataset.name) !== null) item.style.order = localStorage.getItem(item.dataset.name);

        item.addEventListener("click", () =>
        {
            if (!item.classList.contains("selected") && !isTransitioning)
            {
                isTransitioning = true;
                playButton.dataset.link = "";

                if (window.innerWidth > 1080)
                {
                    discContainer.style.transform = "translateY(70vh) rotateX(20deg) rotateY(-30deg)";

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

                shelfItems.forEach(item => item.classList.remove("selected"));
                item.classList.add("selected");

                setTimeout(() => 
                {
                    // discImage.src = item.dataset.image;
                    gameTitle.textContent = item.dataset.name;
                    gameDescription.textContent = item.dataset.description;
                    
                    gameTitle.style.transform = "translateX(0vw)";
                    gameDescription.style.transform = "translateX(0vw)";
                    gameTags.style.transform = "translateX(0vw)";
                    
                    discContainer.style.transform = "translateY(0vh) rotateX(20deg) rotateY(-30deg)";
                }, 1000);
            }
        });

        item.addEventListener("mouseenter", () =>
        {
            playSound("sounds/hover.wav");
        })
    });

    if (shelfItems.length > 0)
    {
        const lowestOrderElement = Array.from(shelfItems).reduce((lowest, current) =>
        {
            const currentOrder = parseInt(current.style.order) || 0;
            const lowestOrder = parseInt(lowest.style.order) || 0;

            return currentOrder < lowestOrder ? current : lowest;
        });

        lowestOrderElement.click();
    }

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