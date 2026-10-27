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

                    /*
                        Once revealed, stop observing it.
                        This prevents the animation from
                        repeatedly restarting.
                    */

                    revealObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.18
        }
    );


revealElements.forEach((element) => {

    revealObserver.observe(element);

});


/* =========================================
   PHOTO ANIMATIONS
========================================= */

const photoCards =
    document.querySelectorAll(".photo-card");


const photoObserver =
    new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "visible"
                    );

                    photoObserver.unobserve(
                        entry.target
                    );
                }

            });

        },
        {
            threshold: 0.2
        }
    );


photoCards.forEach((card) => {

    photoObserver.observe(card);

});


/* =========================================
   FLOATING HEARTS
========================================= */

const heartContainer =
    document.querySelector(".floating-hearts");


function createHeart() {

    if (!heartContainer) return;


    const heart =
        document.createElement("span");


    heart.innerHTML =
        Math.random() > 0.5
            ? "♡"
            : "♥";


    heart.style.position =
        "absolute";


    heart.style.left =
        Math.random() * 100 + "%";


    heart.style.bottom =
        "-40px";


    heart.style.fontSize =
        Math.random() * 18 + 15 + "px";


    heart.style.color =
        "rgba(150, 30, 40, 0.25)";


    heart.style.animation =
        `heartRise ${Math.random() * 5 + 7}s linear forwards`;


    heartContainer.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 13000);

}


setInterval(createHeart, 1200);


/* =========================================
   DYNAMIC HEART ANIMATION
========================================= */

const heartStyle =
    document.createElement("style");


heartStyle.textContent = `

@keyframes heartRise {

    0% {

        transform:
            translateY(0)
            rotate(0deg)
            scale(0.7);

        opacity: 0;

    }

    15% {

        opacity: 1;

    }

    50% {

        transform:
            translateY(-50vh)
            rotate(20deg)
            scale(1);

    }

    100% {

        transform:
            translateY(-120vh)
            rotate(-20deg)
            scale(0.8);

        opacity: 0;

    }

}

`;


document.head.appendChild(
    heartStyle
);


/* =========================================
   AWARD CONFETTI
========================================= */

const awardPage =
    document.querySelector(".award-page");


let confettiStarted = false;


if (awardPage) {

    const awardObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (
                        entry.isIntersecting &&
                        !confettiStarted
                    ) {

                        confettiStarted = true;

                        startConfetti();

                    }

                });

            },
            {
                threshold: 0.5
            }
        );


    awardObserver.observe(
        awardPage
    );

}


/* =========================================
   CONFETTI FUNCTION
========================================= */

function startConfetti() {

    const container =
        document.getElementById(
            "confetti-container"
        );


    if (!container) return;


    const symbols = [
        "♥",
        "♡",
        "✦",
        "✧",
        "🌸",
        "💕"
    ];


    for (let i = 0; i < 45; i++) {

        const piece =
            document.createElement("span");


        piece.innerHTML =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];


        piece.style.position =
            "fixed";


        piece.style.top =
            "-40px";


        piece.style.left =
            Math.random() * 100 + "vw";


        piece.style.fontSize =
            Math.random() * 18 + 14 + "px";


        piece.style.zIndex =
            "9999";


        piece.style.pointerEvents =
            "none";


        const duration =
            Math.random() * 3 + 4;


        piece.style.animation =
            `confettiFall ${duration}s linear forwards`;


        piece.style.animationDelay =
            Math.random() * 1.5 + "s";


        container.appendChild(
            piece
        );


        setTimeout(() => {

            piece.remove();

        }, 7000);

    }

}


/* =========================================
   CONFETTI ANIMATION
========================================= */

const confettiStyle =
    document.createElement("style");


confettiStyle.textContent = `

@keyframes confettiFall {

    0% {

        transform:
            translateY(0)
            rotate(0deg);

        opacity: 1;

    }

    100% {

        transform:
            translateY(110vh)
            rotate(720deg);

        opacity: 0;

    }

}

`;


document.head.appendChild(
    confettiStyle
);


/* =========================================
   SMOOTH BUTTON SCROLL
========================================= */

const choiceButtons =
    document.querySelectorAll(
        ".choice-btn"
    );


choiceButtons.forEach((button) => {

    button.addEventListener(
        "click",
        (event) => {

            const targetId =
                button.getAttribute("href");


            const target =
                document.querySelector(
                    targetId
                );


            if (!target) return;


            event.preventDefault();


            target.scrollIntoView({
                behavior: "smooth"
            });

        }
    );

});


/* =========================================
   PARALLAX EFFECT
========================================= */

window.addEventListener(
    "scroll",
    () => {

        const scrollY =
            window.scrollY;


        const flowers =
            document.querySelectorAll(
                ".flower"
            );


        flowers.forEach(
            (flower, index) => {

                const speed =
                    index % 2 === 0
                        ? 0.08
                        : -0.05;


                flower.style.transform =
                    `translateY(${scrollY * speed}px)`;
            }
        );

    },
    {
        passive: true
    }
);