// #region Global Variables

const clock = document.getElementById("clock");

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

updateClock();
setInterval(updateClock, 500);
preloadSounds();
initButtonEffects();
setTheme(localStorage.getItem("theme"));
setUI(clock, localStorage.getItem(clock.id));

// #endregion

// #region Functions

function updateClock()
{
    clock.textContent = new Date().toLocaleTimeString();
}

function preloadSounds()
{
    for (const sound of Object.values(loadedSoundsMap))
    {
        sound.preload = "auto";
        sound.load();
    }
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

function setTheme(theme)
{
    document.body.className = "";

    if (theme !== "")
    {
        document.body.classList.add(theme);
        localStorage.setItem("theme", theme);
    }
}

function setUI(uiElement, isEnabled)
{
    if (isEnabled === "true")
    {
        uiElement.style.display = "";
        localStorage.setItem(uiElement.id, isEnabled);
    }
    else if (isEnabled === "false")
    {
        uiElement.style.display = "none";
        localStorage.setItem(uiElement.id, isEnabled);
    }
}

// #endregion

// #region Events

document.body.onpointerdown = event =>
{
    playSound("/assets/sounds/click.wav");
};

// #endregion