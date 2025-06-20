// #region Global Variables

window.isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

window.cursor = document.getElementById("cursor");

const soundCooldown = 50;
let lastSoundTime = 0;

// #endregion

// #region Main

checkMobile();
checkLightMode();

// #endregion

// #region Functions

function checkMobile()
{
    if (isMobile) cursor.style.display = "none";
}

function playSound(url)
{
    if (localStorage.getItem("isMute") === "true") return;

    const now = Date.now();

    if (now - lastSoundTime >= soundCooldown)
    {
        const audio = new Audio(url);
        audio.play().catch(e => console.warn("Playback failed:", e));

        lastSoundTime = now;
    }
}

function checkLightMode()
{
    if (localStorage.getItem("isLightMode") === "false") document.body.classList.add("dark-mode");
}

function toggleLightMode()
{
    document.body.classList.toggle("dark-mode");
    let isLightMode = !document.body.classList.contains("dark-mode");
    localStorage.setItem("isLightMode", isLightMode.toString());
}

// #endregion

// #region Events

document.body.onpointermove = event =>
{
    cursor.style.left = `${event.pageX}px`;
    cursor.style.top = `${event.pageY}px`;
};

document.body.onpointerdown = event =>
{
    playSound("/sounds/click.wav");
};

// #endregion