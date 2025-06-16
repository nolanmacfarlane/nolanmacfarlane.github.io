// #region Classes



// #endregion

// #region Global Variables

    const clock = document.getElementById("clock");
    
    const discContainer = document.getElementById("game-disc-container");
    const discImage = document.getElementById("disc-image");
    const gameTitle = document.getElementById("game-title");
    const gameDescription = document.getElementById("game-description");
    
    const shelfItems = document.querySelectorAll(".game-shelf-item");

// #endregion

// #region Main

    updateClock();
    gameInfoSetup();

// #endregion

// #region Functions

    function updateClock()
    {
        let time = new Date();

        clock.textContent = time.toLocaleTimeString();

        setTimeout(updateClock, 1000);
    }
    
    function gameInfoSetup()
    {
        shelfItems.forEach(item =>
        {
            // const img = item.dataset.image;

            // if (img)
            // {
            //     item.style.backgroundImage = `url(${img})`;
            // }

            item.addEventListener("click", () =>
            {
                discContainer.style.transform = "translateY(70vh)";

                gameTitle.textContent = item.dataset.name;
                gameDescription.textContent = item.dataset.description;

                shelfItems.forEach(item => item.classList.remove("selected"));
                item.classList.add("selected");

                setTimeout(() => 
                {
                    // discImage.src = item.dataset.image;
                    discContainer.style.transform = "translateY(0vh)";
                }, 1000);
            });
        });

        if (shelfItems.length > 0)
        {
            shelfItems[0].click();
        }
    }

// #endregion