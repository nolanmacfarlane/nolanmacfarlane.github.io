// #region Variables

const themeInput = document.getElementById("theme-input");
const uiInput = document.getElementById("ui-input");
const effectInput = document.getElementById("effect-input");

const themes = ["default", "solarized", "solarized-dark", "rosepine-moon", "dark-forest", "mocha"];
const uiElements = ["clock", "path-container", "footer"];
const textEffects = ["randomize-effect", "crt-effect"];

const pathContainer = document.getElementById("path-container");
const footer = document.getElementById("footer");

let timeout;

// #endregion

// #region Main

setThemeInputText();
setUI(pathContainer, localStorage.getItem(pathContainer.id));
setUI(footer, localStorage.getItem(footer.id));
setUIInputText();
checkCRTEffect();
setEffectInputText();

//  #endregion

// #region Functions

function setThemeInputText()
{
    let themeInputText = "# Uncomment the theme you want to select\n# If multiple themes are selected then the bottom - most theme takes priority\n\n";

    themes.forEach(theme =>
    {
        if (theme !== localStorage.getItem("theme"))
            themeInputText += "# ";

        themeInputText += "theme=" + theme + "\n";
    });

    themeInput.value = themeInputText;
}

function updateTheme()
{
    lines = filterInput(themeInput);
    
    lines.forEach(line =>
    {
        const splitLine = line.trim().split("=");

        if (splitLine[0] === "theme")
            setTheme(splitLine[1].trim());
    });
}

function setUIInputText()
{
    let uiInputText = "# Change the value to true or false to enable/disable visibility\n\n";

    uiElements.forEach(uiElement =>
    {
        if (localStorage.getItem(uiElement) !== null)
            uiInputText += uiElement + "=" + localStorage.getItem(uiElement) + "\n";
        else
            uiInputText += uiElement + "=true\n";
    });

    uiInput.value = uiInputText;
}

function updateUI()
{
    lines = filterInput(uiInput);
    
    lines.forEach(line =>
    {
        const splitLine = line.trim().split("=");

        if (splitLine[1] !== "")
        {
            if (splitLine[0] === "clock")
                setUI(clock, splitLine[1].trim());
            if (splitLine[0] === "path-container")
                setUI(pathContainer, splitLine[1].trim());
            if (splitLine[0] === "footer")
                setUI(footer, splitLine[1].trim());
        }
    });
}

function setEffectInputText()
{
    let effectInputText = "# Change the value to true or false to enable/disable visibility\n# Warning: The crt-effect may make the text harder to read\n\n";

    textEffects.forEach(textEffect =>
    {
        if (localStorage.getItem(textEffect) !== null)
            effectInputText += textEffect + "=" + localStorage.getItem(textEffect) + "\n";
        else
            effectInputText += textEffect + "=false\n";
    });

    effectInput.value = effectInputText;
}

function updateTextEffects()
{
    lines = filterInput(effectInput);

    lines.forEach(line =>
    {
        const splitLine = line.trim().split("=");

        if (splitLine[1] !== "")
        {
            if (splitLine[0] === "randomize-effect")
                setRandomizeText(splitLine[1].trim());
            if (splitLine[0] === "crt-effect")
                setCRTEffect(splitLine[1].trim());
        }
    });

    checkCRTEffect();
}

function checkCRTEffect()
{
    if (localStorage.getItem("crt-effect") === "true")
    {
        inputFields = document.querySelectorAll(".input");

        inputFields.forEach(inputField =>
        {
            inputField.classList.add("crt");
        });
    }
    else if (localStorage.getItem("crt-effect") === "false")
    {
        inputFields = document.querySelectorAll(".input");

        inputFields.forEach(inputField =>
        {
            inputField.classList.remove("crt");
        });
    }
}

function filterInput(input)
{
    return input.value.split(/\r?\n/).filter(line =>
    {
        line = line.trim();
        return line && !line.startsWith("#");
    });
}

// #endregion

// #region Events

themeInput.addEventListener("input", () =>
{
    clearTimeout(timeout);
    timeout = setTimeout(updateTheme, 100);
});

uiInput.addEventListener("input", () =>
{
    clearTimeout(timeout);
    timeout = setTimeout(updateUI, 100);
});

effectInput.addEventListener("input", () =>
{
    clearTimeout(timeout);
    timeout = setTimeout(updateTextEffects, 100);
});

// #endregion