// #region Global Variables

window.isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
window.isMute = false;

window.cursor = document.getElementById("cursor");

// #endregion

// #region Main

checkMobile();

// #endregion

// #region Functions

function checkMobile()
{
    if (isMobile) cursor.style.display = "none";
}

function playSound(url)
{
    if (!window.isMute)
    {
        const audio = new Audio(url);
        audio.play().catch(e => console.warn("Playback failed:", e));
    }
}

// #endregion

// #region Events

document.body.onpointermove = event =>
{
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
};

document.body.onpointerdown = event =>
{
    playSound("/sounds/click.wav");
};

// #endregion