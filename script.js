// #region Classes



// #endregion

// #region Global Variables

const volumeIcon = document.getElementById("volume-icon");
const muteIcon = document.getElementById("mute-icon");
const settingsIcon = document.getElementById("settings-icon");
const clock = document.getElementById("clock");

const discContainer = document.getElementById("game-disc-container");
const discImage = document.getElementById("disc-image");

const gameTitle = document.getElementById("game-title");
const gameDescription = document.getElementById("game-description");

const shelfItems = document.querySelectorAll(".game-shelf-item");

const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
let isTransitioning = false;

const cursor = document.getElementById("cursor");

// #endregion

// #region Main

initializeVolumeButtons();
initializeSettingsButton();
initializeClock();
initializeGameInfo();

if (isMobile)
    cursor.style.display = "none";

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

// #endregion

// #region Functions

function initializeVolumeButtons()
{
    muteIcon.style.display = "none";
    
    volumeIcon.addEventListener("click", () =>
    {
        volumeIcon.style.display = "none";
        muteIcon.style.display = "block";
    });

    muteIcon.addEventListener("click", () =>
    {
        muteIcon.style.display = "none";
        volumeIcon.style.display = "block";
    })
}

function initializeSettingsButton()
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
                    discContainer.style.transform = "translateY(70vh)";

                    gameTitle.style.transform = "translateX(50vw)";
                    gameDescription.style.transform = "translateX(50vw)";
                }
                else
                {
                    discContainer.style.transform = "translateY(-90vw)";
                    
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
                    
                    discContainer.style.transform = "translateY(0vh)";
                }, 1000);
            }
        });
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