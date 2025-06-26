// #region Variables

const loadingScreen = document.getElementById("loading-screen");

const homeButton = document.getElementById("home-button");

// #endregion

// #region Main

initHomeButton();

setTimeout(fadeLoadingScreen, 5000);

// #endregion

// #region Functions

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