// #region Variables

const infoImages = document.querySelectorAll(".info-image");

const scrollAnimations =
{
    "frying-pan": (element, progress) =>
    {
        element.style.transform = `rotate(-15deg) translateY(${progress * -30 + 15}vh)`;
    },
    
    "pancake": (element, progress) =>
    {
        element.style.transform = `rotate(-15deg) rotateX(-40deg) translateY(${progress * -60 + 5}vh)`;
    },
    
    "tennis-ball": (element, progress) =>
    {
        element.style.transform = `translateX(${progress * -300 + 150}vw) rotateZ(${progress * -720}deg)`;
        element.style.scale = Math.min(Math.sin(progress), 0.8);
    },

    "violin-bow": (element, progress) =>
    {
        element.style.transform = `rotate(70deg) translateY(${progress * 10}vw)`;
    },

    "wii-disc": (element, progress) =>
    {
        element.style.transform = `rotateX(15deg) rotateY(30deg) translateX(${progress * 8}vw) rotate(${progress * 180}deg)`;
    },

    "cursor-img": (element, progress) =>
    {
        element.style.transform = `translateY(-300px) translateX(${Math.sin(progress * Math.PI * 2) * 20}vw) translateY(${(Math.sin(progress * Math.PI * 2) + 1) / 2 * 50}vh)`;
    },

    "mario": (element, progress) =>
    {
        const start = 0.2;
        const end = 0.4;

        let actualProgress = (progress - start) / (end - start);
        actualProgress = Math.min(Math.max(actualProgress, 0), 1);
        
        element.style.transform = `translateY(${Math.sin(actualProgress * Math.PI) * -46}vh)`;
        
        if (actualProgress > 0.05 && actualProgress < 0.95) element.src = "/assets/images/mario-jump.png";
        else element.src = "/assets/images/mario.png";
    },

    "question-block": (element, progress) =>
    {
        const start = 0.27;
        const end = 0.35;

        let actualProgress = (progress - start) / (end - start);
        actualProgress = Math.min(Math.max(actualProgress, 0), 1);

        element.style.transform = `translateY(${Math.sin(actualProgress * Math.PI) * -5}vh)`;
    }
};

let isTicking = false;

// #endregion

// #region Main

initScrollAnims();

// #endregion

// #region Functions

function initScrollAnims()
{
    window.addEventListener("scroll", () =>
    {
        if (!isTicking)
        {
            requestAnimationFrame(updateScrollAnims);
            isTicking = true;
        }
    })
}

function updateScrollAnims()
{
    infoImages.forEach(infoImage =>
    {
        const progress = getSectionScrollProgress(infoImage.parentElement);
        const scrollAnimation = scrollAnimations[infoImage.id];

        if (scrollAnimation) scrollAnimation(infoImage, progress);
    });

    isTicking = false;
}

function getSectionScrollProgress(section)
{
    const rect = section.getBoundingClientRect();
    const sectionHeight = section.offsetHeight;
    const windowHeight = window.innerHeight;

    const scrollDistance = windowHeight - rect.top;
    const totalScroll = windowHeight + sectionHeight;

    // Section scroll progress value from 0 to 1
    const progress = Math.min(Math.max(scrollDistance / totalScroll, 0), 1);

    return progress;
}

// #endregion