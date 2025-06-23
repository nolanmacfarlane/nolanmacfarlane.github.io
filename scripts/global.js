// #region Global Variables

const buttons = document.querySelectorAll(".button");

window.isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

window.cursor = document.getElementById("cursor");

let cursorHeight = window.cursor.style.height;

const soundCooldown = 50;
let lastSoundTime = 0;

// #endregion

// #region Main

initButtonEffects();
checkMobile();
checkLightMode();

// #endregion

// #region Functions

function initButtonEffects()
{
    buttons.forEach(button =>
    {
        button.addEventListener("mouseenter", () =>
        {
            playSound("/sounds/hover.wav");

            cursorHeight = window.cursor.style.height;
            window.cursor.style.height = "1.5vh";
        });

        button.addEventListener("mouseleave", () =>
        {
            window.cursor.style.height = cursorHeight;
        })
    });
}

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