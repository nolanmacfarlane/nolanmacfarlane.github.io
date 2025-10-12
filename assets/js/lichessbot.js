import LichessPgnViewer from "https://cdn.jsdelivr.net/npm/lichess-pgn-viewer@latest/dist/lichess-pgn-viewer.min.js";

// #region Variables

const status = document.getElementById("status");
const boardContainer = document.getElementById("board-container");

let currentPGN = "";

// #endregion

// #region Main

updateGame();
setInterval(updateGame, 3000);

// #endregion

// #region Functions

async function updateGame()
{
    try
    {
        const res = await fetch("https://lichess.org/api/user/nmacBot/current-game");

        if (!res.ok)
        {
            status.textContent = "Bot is not currently playing.";
            boardContainer.firstElementChild.replaceChildren();
            currentPGN = "";
            return;
        }

        const pgn = await res.text();

        if (pgn !== currentPGN)
        {
            currentPGN = pgn;
            boardContainer.firstElementChild.replaceChildren();

            LichessPgnViewer(boardContainer.firstElementChild,
            {
                pgn: currentPGN,
                showMoves: false,
                showClocks: false,
                showControls: false,
                initialPly: 'last'
            });
            
            status.textContent = "Currently playing:";
        }
    }
    catch (e)
    {
        console.error(e);
        status.textContent = "Error fetching game info.";
    }
}

// #endregion