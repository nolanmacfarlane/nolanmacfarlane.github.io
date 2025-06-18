// #region Classes



// #endregion

// #region Global Variables

const profileIcon = document.getElementById("profile-icon");
const volumeIcon = document.getElementById("volume-icon");
const muteIcon = document.getElementById("mute-icon");
const settingsIcon = document.getElementById("settings-icon");
const shopIcon = document.getElementById("shop-icon");
const libraryIcon = document.getElementById("library-icon");

const icons = [profileIcon, volumeIcon, muteIcon, settingsIcon, shopIcon, libraryIcon];

const playButton = document.getElementById("play-button");

const clock = document.getElementById("clock");

const discContainer = document.getElementById("game-disc-container");
const discImage = document.getElementById("disc-image");

const gameTitle = document.getElementById("game-title");
const gameDescription = document.getElementById("game-description");

const shelfItems = document.querySelectorAll(".game-shelf-item");

const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
let isTransitioning = false;
let isMute = false;

const cursor = document.getElementById("cursor");

// #endregion

// #region Main

initializeIcons();
initializePlayButton();
initializeClock();
initializeGameInfo();

if (isMobile)
    cursor.style.display = "none";

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

    initializeVolumeIcons();
    initializeSettingsIcon();
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
    });
}

function initializeVolumeIcons()
{
    muteIcon.style.display = "none";
    
    volumeIcon.addEventListener("click", () =>
    {
        isMute = true;
        
        volumeIcon.style.display = "none";
        muteIcon.style.display = "block";

        console.log(isMute);
    });

    muteIcon.addEventListener("click", () =>
    {
        isMute = false;
        
        muteIcon.style.display = "none";
        volumeIcon.style.display = "block";

        console.log(isMute);
    })
}

function playSound(url)
{
    if (!isMute)
    {
        const audio = new Audio(url);
        audio.play();
    }
}

function initializeSettingsIcon()
{
    settingsIcon.addEventListener("click", () =>
    {
        settingsIcon.style.animation = "spin 1s ease-in-out";
        setTimeout(() =>
        {
            window.location.href = "/settings/";
        }, 1000);
    });

    settingsIcon.addEventListener("animationend", () =>
    {
        settingsIcon.style.animation = "none";
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

        item.addEventListener("click", () =>
        {
            if (!item.classList.contains("selected") && !isTransitioning)
            {
                isTransitioning = true;

                if (window.innerWidth > 1080)
                {
                    discContainer.style.transform = "translateY(70vh) rotateX(20deg) rotateY(-30deg)";

                    gameTitle.style.transform = "translateX(50vw)";
                    gameDescription.style.transform = "translateX(50vw)";
                }
                else
                {
                    discContainer.style.transform = "translateY(-90vw) rotateX(20deg) rotateY(-30deg)";
                    
                    gameTitle.style.transform = "translateX(100vw)";
                    gameDescription.style.transform = "translateX(100vw)";
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
        shelfItems[0].click();
    }
}

function onResize()
{
    if (window.innerWidth > 1080)
        window.scrollTo({ top: 0, behavior: 'smooth' });
}

// #endregion

// #region Events

gameDescription.addEventListener("transitionend", () =>
{
    isTransitioning = false;
});

window.addEventListener("resize", onResize);

document.body.onpointermove = event =>
{
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
};

document.body.onpointerdown = event =>
{
    playSound("sounds/click.wav");
}

// #endregion