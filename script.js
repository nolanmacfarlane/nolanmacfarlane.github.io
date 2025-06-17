// #region Classes



// #endregion

// #region Global Variables

const settingsIcon = document.getElementById("settings-icon");
const clock = document.getElementById("clock");

const discContainer = document.getElementById("game-disc-container");
const discImage = document.getElementById("disc-image");

const gameTitle = document.getElementById("game-title");
const gameDescription = document.getElementById("game-description");

const shelfItems = document.querySelectorAll(".game-shelf-item");

let isTransitioning = false;

// #endregion

// #region Main

initializeSettingsButton();
initializeClock();
initializeGameInfo();

gameDescription.addEventListener("transitionend", () =>
{
    isTransitioning = false;
});

window.addEventListener("resize", onResize);

// #endregion

// #region Functions

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