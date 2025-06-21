// #region Global Variables

const homeIcon = document.getElementById("home-icon");

// #endregion

// #region Main

initHomeIcon();

// #endregion

// #region Functions

function initHomeIcon()
{
    homeIcon.addEventListener("mouseenter", () =>
    {
        playSound("/sounds/hover.wav");
    });
    
    homeIcon.addEventListener("click", () =>
    {
        window.location.href = "/";
    });
}

// #endregion

// #region Events



// #endregion