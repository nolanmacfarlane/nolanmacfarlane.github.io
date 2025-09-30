// #region Variables

const themeInput = document.getElementById("theme-input");

let timeout;

// #endregion

// #region Main



//  #endregion

// #region Functions

function updateTheme()
{
    const lines = themeInput.value.split(/\r?\n/).filter(line =>
    {
        line = line.trim();
        return line && !line.startsWith("#");
    });
    
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

// #endregion

// #region Events

themeInput.addEventListener("input", () =>
{
    clearTimeout(timeout);
    timeout = setTimeout(updateTheme, 100);
});

// #endregion