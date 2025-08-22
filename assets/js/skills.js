// #region Variables

const gameTitle = document.getElementById("game-title");
let isRandomizingTitleText = false;

let isRandomizingContinueButton = false;
let isRandomizingHomeButton = false;

const path = document.getElementById("path");
const fileMetadata = document.getElementById("file-metadata");

const folders = document.querySelectorAll(".folder");
const files = document.querySelectorAll(".file");

const fileLogo = document.getElementById("file-logo");
const fileTitle = document.getElementById("file-title");
const fileDescription = document.getElementById("file-description");
const fileStats = document.getElementById("file-stats");
const statTitles = document.querySelectorAll(".stat-title");

// #endregion

// #region Main

initGameTitle();
initButtonEffects();
initFolders();
initFiles();

// #endregion

// #region Functions

function initGameTitle()
{
    gameTitle.addEventListener("mouseenter", async () =>
    {
        if (isRandomizingTitleText) return;

        isRandomizingTitleText = true;

        await randomizeTextEffect(gameTitle, 20);

        isRandomizingTitleText = false;
    });
}

function initButtonEffects()
{
    continueButton.addEventListener("mouseenter", async () =>
    {
        if (isRandomizingContinueButton) return;

        isRandomizingContinueButton = true;

        await randomizeTextEffect(continueButton, 20);

        isRandomizingContinueButton = false;
    });

    homeButton.addEventListener("mouseenter", async () =>
    {
        if (isRandomizingHomeButton) return;

        isRandomizingHomeButton = true;

        await randomizeTextEffect(homeButton, 20);

        isRandomizingHomeButton = false;
    });
}

async function randomizeTextEffect(stringElement, loops)
{
    let stringText = stringElement.textContent;

    for (let i = loops; i >= 0; i--)
    {
        stringElement.textContent = stringText.substring(0, stringText.length - i) + getRandomString(Math.min(stringText.length, i));
        await new Promise(resolve => setTimeout(resolve, 50));
    }
}

function getRandomString(length)
{
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()";
    let randomString = "";

    for (let i = 0; i < length; i++)
    {
        randomString += characters[Math.round(Math.random() * (characters.length - 1))];
    }

    return randomString;
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

                path.textContent = "nolanmacfarlane@portfolioOS:~$ /home/nolanmacfarlane/" + folder.textContent + "/";

                fileMetadata.textContent = "/" + folder.textContent + "/ - " + getNumItems(folder) + " items";

                fileLogo.src = "";
                fileTitle.textContent = "";
                fileDescription.textContent = "";
                fileStats.style.display = "none";

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

            path.textContent = "nolanmacfarlane@portfolioOS:~$ /home/nolanmacfarlane/" + getCurrentFolder().textContent + "/" + file.id + ".txt";
            
            fileMetadata.textContent = file.id + ".txt - " + getFileIndex(file) + "/" + getNumItems(getCurrentFolder()) + " items";

            fileLogo.src = file.dataset.logo;
            fileTitle.textContent = file.id;
            fileDescription.textContent = file.dataset.description;
            fileStats.style.display = "flex";

            for (const statTitle of statTitles)
            {
                if (statTitle.classList.contains(getCurrentFolder().id)) statTitle.style.display = "flex";
                else statTitle.style.display = "none";
            }

            for (const statBar of Array.from(fileStats.lastElementChild.children))
            {
                if (statBar.classList.contains(getCurrentFolder().id)) statBar.style.display = "flex";
                else statBar.style.display = "none";

                const statValue = Number.parseInt(file.dataset[statBar.id] ?? "0");

                for (const [j, statBarSegment] of Array.from(statBar.children).entries())
                {
                    if (j < statValue) statBarSegment.classList.add("fill");
                    else statBarSegment.classList.remove("fill");

                    await new Promise(resolve => setTimeout(resolve, 10));
                }
            }
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

// #endregion