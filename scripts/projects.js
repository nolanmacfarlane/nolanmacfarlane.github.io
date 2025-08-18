// #region Variables

const messageScreen = document.getElementById("message-screen");

const portfolioSiteButton = document.getElementById("portfolio-site");
const chessEngineButton = document.getElementById("chess-engine");
const metroidvaniaButton = document.getElementById("metroidvania");

// #endregion

// #region Main

initMessageScreen();
initPortfolioButton();
initChessEngineButton();
initMetroidvaniaButton();

// #endregion

// #region Functions

function initMessageScreen()
{
    messageScreen.childNodes.item(1).addEventListener("click", () =>
    {
        messageScreen.style.opacity = "0";
        messageScreen.style.pointerEvents = "none";
    });
}

function initPortfolioButton()
{
    portfolioSiteButton.addEventListener("click", () =>
    {
        window.open("/", "_blank");
    });
}

function initChessEngineButton()
{
    chessEngineButton.addEventListener("click", () =>
    {
        window.open("https://github.com/nolanmacfarlane/Chess-Engine", "_blank");
    });
}

function initMetroidvaniaButton()
{
    metroidvaniaButton.addEventListener("click", () =>
    {
        messageScreen.style.pointerEvents = "auto";
        messageScreen.style.opacity = "1";
    });
}

// #endregion