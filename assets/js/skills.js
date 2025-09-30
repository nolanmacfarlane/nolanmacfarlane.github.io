// #region Variables

// const gameTitle = document.getElementById("game-title");

// let isRandomizingTitleText = false;
// let isRandomizingContinueButton = false;
// let isRandomizingHomeButton = false;

const path = document.getElementById("path");
const currentFile = document.getElementById("current-file");
const fileMetadata = document.getElementById("file-metadata");

const folders = document.querySelectorAll(".folder");
const files = document.querySelectorAll(".file");

const fileLogo = document.getElementById("file-logo");
const fileTitle = document.getElementById("file-title");
const fileDescription = document.getElementById("file-description");
const fileLinks = document.getElementById("links");
// const fileStats = document.getElementById("file-stats");
// const statTitles = document.querySelectorAll(".stat-title");

// #endregion

// #region Main

// initGameTitle();
initButtonEffects();
initFolders();
initFiles();

// #endregion

// #region Functions

// function initGameTitle()
// {
//     gameTitle.addEventListener("mouseenter", async () =>
//     {
//         if (isRandomizingTitleText) return;

//         isRandomizingTitleText = true;

//         await randomizeTextEffect(gameTitle);

//         isRandomizingTitleText = false;
//     });
// }

// function initButtonEffects()
// {
//     continueButton.addEventListener("mouseenter", async () =>
//     {
//         if (isRandomizingContinueButton) return;

//         isRandomizingContinueButton = true;

//         await randomizeTextEffect(continueButton);

//         isRandomizingContinueButton = false;
//     });

//     homeButton.addEventListener("mouseenter", async () =>
//     {
//         if (isRandomizingHomeButton) return;

//         isRandomizingHomeButton = true;

//         await randomizeTextEffect(homeButton);

//         isRandomizingHomeButton = false;
//     });
// }

async function randomizeTextEffect(stringElement)
{
    let elementText = stringElement.textContent;
    let textLength = elementText.length;
    let startTimeMilli = Date.now();
    let totalDuration = 500;
    let delay = 30;

    while (Date.now() - startTimeMilli < totalDuration)
    {
        stringElement.textContent = Array.from(elementText, ch => ch === " " ? " " : getRandomChar()).join("");
        await new Promise(resolve => setTimeout(resolve, delay));
    }

    stringElement.textContent = elementText;
}

function getRandomChar()
{
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
    return characters[Math.floor(Math.random() * (characters.length))];
}

function initFolders()
{    
    folders.forEach(folder =>
    {
        folder.addEventListener("click", () =>
        {
            if (!folder.classList.contains("selected"))
            {
                folders.forEach(item => item.classList.remove("selected"));
                folder.classList.add("selected");

                path.textContent = "/home/nolanmacfarlane/" + folder.textContent + "/";
                currentFile.style.display = "none";

                fileMetadata.textContent = "/" + folder.textContent + "/ - " + getNumItems(folder) + " items";

                fileLogo.textContent = "";
                fileTitle.textContent = "";
                fileDescription.textContent = "";

                Array.from(fileLinks.children).forEach(link =>
                {
                    link.style.display = "none";
                });

                // fileStats.style.display = "none";

                files.forEach(file =>
                {
                    file.classList.remove("selected");
                    
                    if (file.classList.contains(folder.id)) file.style.display = "flex";
                    else file.style.display = "none";
                });
            }
        });
    });

    folders[0].click();
}

function getNumItems(folder)
{
    let numItems = 0;
    
    files.forEach(file =>
    {
        if (file.classList.contains(folder.id)) numItems++;
    });

    return numItems;
}

function initFiles()
{
    files.forEach(file =>
    {
        file.addEventListener("click", async () =>
        {
            if (file.classList.contains("selected")) return;

            files.forEach(item => item.classList.remove("selected"));
            file.classList.add("selected");

            path.textContent = "/home/nolanmacfarlane/" + getCurrentFolder().textContent + "/";
            currentFile.style.display = "flex";
            currentFile.textContent = file.id + ".txt";
            
            fileMetadata.textContent = file.id + ".txt - " + getFileIndex(file) + "/" + getNumItems(getCurrentFolder()) + " items";

            fileLogo.textContent = await loadAsciiImage(file.dataset.logo);
            fileTitle.textContent = file.id;
            fileDescription.textContent = file.dataset.description;

            Array.from(fileLinks.children).forEach(link =>
            {
                link.style.display = "none";
            });

            if (file.dataset.links != null)
            {
                const currentFileLinks = file.dataset.links.split(" ");

                currentFileLinks.forEach(link =>
                {
                    document.getElementById(link).style.display = "flex";
                });
            }
            
            // fileStats.style.display = "flex";

            randomizeTextEffect(fileTitle);

            // for (const statTitle of statTitles)
            // {
            //     if (statTitle.classList.contains(getCurrentFolder().id)) statTitle.style.display = "flex";
            //     else statTitle.style.display = "none";
            // }

            // for (const statBar of Array.from(fileStats.lastElementChild.children))
            // {
            //     if (statBar.classList.contains(getCurrentFolder().id)) statBar.style.display = "flex";
            //     else statBar.style.display = "none";

            //     const statValue = Number.parseInt(file.dataset[statBar.id] ?? "0");

            //     for (const [j, statBarSegment] of Array.from(statBar.children).entries())
            //     {
            //         if (j < statValue) statBarSegment.classList.add("fill");
            //         else statBarSegment.classList.remove("fill");

            //         await new Promise(resolve => setTimeout(resolve, 10));
            //     }
            // }
        });
    });

    files[0].click();
}

function getCurrentFolder()
{
    return document.querySelector(".folder.selected");
}

function getFileIndex(file)
{
    let fileIndex = 0;
    let isFileFound = false;

    files.forEach(currentFile =>
    {
        if (currentFile.classList.contains(getCurrentFolder().id) && !isFileFound)
        {
            fileIndex++;
            
            if (currentFile === file) isFileFound = true;
        }
    });

    return fileIndex;
}

async function loadAsciiImage(path)
{
    if (path === "")
    {
        console.warn("No file selected!");
        return "[Error loading ASCII art]";
    }
    else if (path.split(".")[1] !== "txt")
    {
        console.warn("Invalid file type!");
        return "[Error loading ASCII art]";
    }
    
    try
    {
        const response = await fetch(path);
        
        if (!response.ok) throw new Error(`Failed to load ${path}`);

        return response.text();
    }
    catch (err)
    {
        console.error(err);
        return "[Error loading ASCII art]";
    }
}

// #endregion