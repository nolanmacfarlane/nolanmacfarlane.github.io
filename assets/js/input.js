// #region Variables

const themeInput = document.getElementById("theme-input");
const uiInput = document.getElementById("ui-input");

const pathContainer = document.getElementById("path-container");
const footer = document.getElementById("footer");

let timeout;

// #endregion

// #region Main



//  #endregion

// #region Functions

function updateTheme()
{
    lines = filterInput(themeInput);
    
    lines.forEach(line =>
    {
        const splitLine = line.trim().split("=");

        if (splitLine[0] === "theme")
        {
            document.body.className = "";
            if (splitLine[1] !== "") document.body.classList.add(splitLine[1].trim());
        }
    });
}

function updateUI()
{
    lines = filterInput(uiInput);
    
    lines.forEach(line =>
    {
        const splitLine = line.trim().split("=");

        if (splitLine[0] === "clock")
        {
            if (splitLine[1].trim() === "true")
                clock.style.display = "";
            else if (splitLine[1].trim() === "false")
                clock.style.display = "none";
        }
        if (splitLine[0] === "path")
        {
            if (splitLine[1].trim() === "true")
                pathContainer.style.display = "";
            else if (splitLine[1].trim() === "false")
                pathContainer.style.display = "none";
        }
        if (splitLine[0] === "bottombar")
        {
            if (splitLine[1].trim() === "true")
                footer.style.display = "";
            else if (splitLine[1].trim() === "false")
                footer.style.display = "none";
        }
    });
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

window.addEventListener("DOMContentLoaded", () =>
{
    updateTheme();
    updateUI();
});

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

// #endregion