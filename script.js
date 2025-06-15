// #region Classes



// #endregion

// #region Global Variables

    const clock = document.getElementById("clock");

// #endregion

// #region Main

    updateClock();

// #endregion

// #region Functions

    function updateClock()
    {
        let time = new Date();

        clock.textContent = time.toLocaleTimeString();
        
        setTimeout(updateClock, 1000);
    }
    

// #endregion