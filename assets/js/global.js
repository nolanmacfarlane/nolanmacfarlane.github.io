// #region Global Variables

const loadedSoundsMap =
{
    "/assets/sounds/click.wav": new Audio("/assets/sounds/click.wav"),
    "/assets/sounds/hover.wav": new Audio("/assets/sounds/hover.wav")
};

const buttons = document.querySelectorAll(".button");

const soundCooldown = 50;
let lastSoundTime = 0;

// #endregion

// #region Main

preloadSounds();
initButtonEffects();
checkLightMode();

// #endregion

// #region Functions

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
            playSound("/assets/sounds/hover.wav");
        });
    });
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

document.body.onpointerdown = event =>
{
    playSound("/assets/sounds/click.wav");
};

// #endregion