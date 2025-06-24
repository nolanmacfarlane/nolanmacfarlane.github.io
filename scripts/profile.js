// #region Global Variables

const homeIcon = document.getElementById("home-icon");

// #endregion

// #region Main

initHomeIcon();

// #endregion

// #region Functions

function initHomeIcon()
{    
    homeIcon.parentElement.addEventListener("click", () =>
    {
        window.location.href = "/";
    });
}

// #endregion

// #region Events



// #endregion