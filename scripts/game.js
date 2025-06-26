// #region Variables

const loadingScreen = document.getElementById("loading-screen");

const gameTitle = document.getElementById("game-title");

const homeButton = document.getElementById("home-button");

// #endregion

// #region Main

initGameTitle();
initHomeButton();

setTimeout(fadeLoadingScreen, 5000);

// #endregion

// #region Functions

function initGameTitle()
{
    gameTitle.addEventListener("mouseenter", () =>
    {
        playSound("/sounds/game-title-hover.wav");
    });
}

function initHomeButton()
{
    homeButton.addEventListener("click", () =>
    {
        window.location.href = "/";
    })
}

function fadeLoadingScreen()
{
    loadingScreen.style.opacity = "0";

    loadingScreen.addEventListener("transitionend", () =>
    {
        loadingScreen.style.pointerEvents = "none";
    });
}

// #endregion