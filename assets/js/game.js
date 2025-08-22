// #region Variables

const loadingScreen = document.getElementById("loading-screen");

const contentContainer = document.getElementById("content-container");

const continueButton = document.getElementById("continue-button");
const homeButton = document.getElementById("home-button");

// #endregion

// #region Main

initButtons();

setTimeout(fadeLoadingScreen, 1000);

// #endregion

// #region Functions

function initButtons()
{
    continueButton.addEventListener("click", () =>
    {
        window.scrollTo({top: contentContainer.offsetTop, behavior: "smooth"});
    });
    
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
        document.body.style.overflow = "auto";
        loadingScreen.style.pointerEvents = "none";
    });
}

// #endregion