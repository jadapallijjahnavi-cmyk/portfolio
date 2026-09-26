/* =========================================
   SCROLL REVEAL
========================================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    revealObserver.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   ANIMATED SKILL BARS
========================================= */

const progressBars =
    document.querySelectorAll(".progress-bar");

const skillObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    const width =
                        entry.target.dataset.width;

                    entry.target.style.width =
                        `${width}%`;

                    skillObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.5
        }
    );

progressBars.forEach((bar) => {

    skillObserver.observe(bar);

});


/* =========================================
   3D MOUSE CARD
========================================= */

const card =
    document.getElementById("dimensionCard");

document.addEventListener(
    "mousemove",
    (event) => {

        if (!card) return;

        const rect =
            card.getBoundingClientRect();

        const centerX =
            rect.left + rect.width / 2;

        const centerY =
            rect.top + rect.height / 2;

        const rotateX =
            (event.clientY - centerY) / 25;

        const rotateY =
            (event.clientX - centerX) / 25;

        card.style.transform =
            `rotateX(${-rotateX}deg)
             rotateY(${rotateY}deg)
             translateZ(10px)`;

    }
);

document.addEventListener(
    "mouseleave",
    () => {

        if (!card) return;

        card.style.transform =
            "rotateX(0deg) rotateY(0deg)";

    }
);


/* =========================================
   THEME SWITCH
========================================= */

const themeBtn =
    document.getElementById("themeBtn");

themeBtn.addEventListener(
    "click",
    () => {

        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");

        themeBtn.textContent =
            isLight ? "☀" : "◐";

        localStorage.setItem(
            "portfolio-theme",
            isLight ? "light" : "dark"
        );

    }
);


/* =========================================
   LOAD SAVED THEME
========================================= */

const savedTheme =
    localStorage.getItem(
        "portfolio-theme"
    );

if (savedTheme === "light") {

    document.body.classList.add("light");

    themeBtn.textContent = "☀";

}


/* =========================================
   DYNAMIC CURSOR GLOW
========================================= */

const cursorGlow =
    document.createElement("div");

cursorGlow.style.position =
    "fixed";

cursorGlow.style.width =
    "180px";

cursorGlow.style.height =
    "180px";

cursorGlow.style.borderRadius =
    "50%";

cursorGlow.style.pointerEvents =
    "none";

cursorGlow.style.background =
    "radial-gradient(circle, rgba(155,92,255,.12), transparent 70%)";

cursorGlow.style.transform =
    "translate(-50%, -50%)";

cursorGlow.style.zIndex =
    "-1";

document.body.appendChild(cursorGlow);

document.addEventListener(
    "mousemove",
    (event) => {

        cursorGlow.style.left =
            `${event.clientX}px`;

        cursorGlow.style.top =
            `${event.clientY}px`;

    }
);


/* =========================================
   PROJECT CARD TILT
========================================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

projectCards.forEach((project) => {

    project.addEventListener(
        "mousemove",
        (event) => {

            const rect =
                project.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                (y - centerY) / 25;

            const rotateY =
                (centerX - x) / 25;

            project.style.transform =
                `perspective(700px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-10px)`;

        }
    );

    project.addEventListener(
        "mouseleave",
        () => {

            project.style.transform = "";

        }
    );

});
