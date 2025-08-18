// #region Global Variables

const imagesToPreload =
[
    "/images/c-logo.webp",
    "/images/c-sharp-logo.webp",
    "/images/css-logo.webp",
    "/images/html-logo.webp",
    "/images/java-logo.webp",
    "/images/javascript-logo.webp",
    "/images/python-logo.webp",
    "/images/ubuntu-logo.webp",
    "/images/unity-logo.webp",
    "/images/vs-code-logo.webp",
    "/images/zen-browser-logo.webp"
];

const loadedSoundsMap =
{
    "/sounds/click.wav": new Audio("/sounds/click.wav"),
    "/sounds/game-title-hover.wav": new Audio("/sounds/game-title-hover.wav"),
    "/sounds/hover.wav": new Audio("/sounds/hover.wav"),
    "/sounds/play.wav": new Audio("/sounds/play.wav")
};

const buttons = document.querySelectorAll(".button");

const links = document.querySelectorAll("a");

window.isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

window.cursor = document.getElementById("cursor");

let cursorHeight = window.cursor.style.height;
let cursorOpacity = window.cursor.style.opacity;

const soundCooldown = 50;
let lastSoundTime = 0;

// #endregion

// #region Main

preloadImages();
preloadSounds();
initButtonEffects();
initLinks();
checkMobile();
checkLightMode();

// #endregion

// #region Functions

function preloadImages()
{
    imagesToPreload.forEach(src =>
    {
        const img = new Image();
        img.src = src;
    });
}

function preloadSounds()
{
    for (const sound of Object.values(loadedSoundsMap))
    {
        sound.preload = "auto";
        sound.load();
    }
}

function initButtonEffects()
{
    buttons.forEach(button =>
    {
        // For keyboard compatibility
        button.tabIndex = 0;
        button.role = "button";

        button.addEventListener("keydown", (event) =>
        {
            if (event.key === "Enter" || event.key === " ")
            {
                button.click();
                event.preventDefault();
            }
        });
        
        button.addEventListener("mouseenter", () =>
        {
            playSound("/sounds/hover.wav");

            window.cursor.style.height = "1.5vh";
        });

        button.addEventListener("mouseleave", () =>
        {
            window.cursor.style.height = cursorHeight;
        })
    });
}

function initLinks()
{
    links.forEach(link =>
    {
        link.addEventListener("mouseenter", () =>
        {
            window.cursor.style.display = "none";
        });

        link.addEventListener("mouseleave", () =>
        {
            window.cursor.style.display = "block";
        });
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
        const audio = getLoadedSound(url);

        if (audio)
        {
            audio.play().catch(e => console.warn("Playback failed:", e));
            lastSoundTime = now;
        }
    }
}

function getLoadedSound(url)
{
    const sound = loadedSoundsMap[url];
    return sound ? sound.cloneNode() : null;
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
    cursor.style.left = `${event.clientX}px`;
    cursor.style.top = `${event.clientY}px`;
};

document.body.onpointerdown = event =>
{
    playSound("/sounds/click.wav");

    cursorOpacity = window.cursor.style.opacity;
    cursor.style.opacity = "0.7";
};

document.body.onpointerup = event =>
{
    cursor.style.opacity = cursorOpacity;
};

// #endregion