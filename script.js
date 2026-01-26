gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);


const cursor = document.querySelector('.cursor');
const skills = document.querySelectorAll('.skill');
const links = document.querySelectorAll('.link');
const image = document.querySelector('img');
const college = document.querySelector('.college');


// let smoother = ScrollSmoother.create({
//     wrapper: "#smooth-wrapper",
//     content: "#smooth-content"
// });

window.addEventListener("mousemove", (e) => {
    gsap.to(cursor, {
        x: e.x,
        y: e.y,
        duration: 0.5
    })
});

document.fonts.ready.then(() => {
    let link = SplitText.create(".link", {
        type: "chars"
    });

    let nameSplit1 = SplitText.create(".fName", {
        type: "words"
    });

    let nameSplit2 = SplitText.create(".lName", {
        type: "words"
    });

    let split1 = SplitText.create(".text", {
        type: "words",
        wordsClass: "word++"
    });

    gsap.from(nameSplit1.words, {
        y: 150,
        // scale: 0.5,
        transformOrigin: "center",
        opacity: 0,
        delay: 2,
        duration: 1,
        ease: "power4",
        stagger: 0.04
    })
    gsap.from(nameSplit2.words, {
        y: -150,
        opacity: 0,
        delay: 2.5,
        duration: 1,
        ease: "power4",
        stagger: 0.04
    })

    gsap.from(split1.words, {
        y: 100,
        opacity: 0,
        delay: 3,
        autoAlpha: 0,
        stagger: 0.05
    });

    let split2 = SplitText.create(".skill", {
        type: "words"
    });

    let linkSplit = SplitText.create(".link", {
        type: "chars"
    });


    gsap.from(split2.words, {
        scrollTrigger: {
            trigger: ".skill",
            start: ".skills 90%",
            toggleActions: "play none none reverse",
            scrub: 2
        },
        y: 100,
        delay: 0,
        opacity: 0,
        stagger: 0.1
    });
    gsap.from(linkSplit.chars, {
        scrollTrigger: {
            trigger: ".link",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        x: 1,
        delay: 2,
        autoAlpha: 0,
        stagger: 0.05
    });

});



skills.forEach(skill => {
    skill.addEventListener('mouseover', () => {
        skill.classList.add('zoom');
    });
    skill.addEventListener('mouseout', () => {
        skill.classList.remove('zoom');
    });
});

const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach((item, index) => {
    if (index === 0 || index === 2) {
        gsap.from(item, {
            y: 200,
            opacity: 0,
            scrollTrigger: {
                trigger: item,
                scroller: "body",
                scrub: 2,
                start: "top 80%",
                end: "top 60%",
            }
        });
    }
    else {
        gsap.from(item, {
            y: 200,
            opacity: 0,
            scrollTrigger: {
                trigger: item,
                scroller: "body",
                scrub: 2,
                start: "top 80%",
                end: "top 60%",
            }
        });
    }
    item.addEventListener('mouseenter', () => {
        cursor.innerText = 'View';
        cursor.classList.add('cursor-hover');
        gsap.to(cursor, {
            scale: 4
        })
    });
    item.addEventListener('mouseleave', () => {
        cursor.innerText = '';
        cursor.classList.remove('cursor-hover');

        gsap.to(cursor, {
            scale: 1
        })
    });
});


let touchText = SplitText.create(".touch", {
    type: "words"
});
let stars = SplitText.create(".stars", {
    type: "chars"
});

gsap.to("#message h1", {
    transform: "translateX(-85%)",
    scrollTrigger: {
        trigger: "#message",
        scroller: "body",
        start: "top 0%",
        end: "top -85%",
        scrub: 2,
        pin: true,
    }
})

gsap.from(touchText.words, {
    scrollTrigger: {
        trigger: ".touch",
        scroller: "body",
        start: "top 70%",
        end: "top 40%",
        toggleActions: "play none none reverse",
    },
    y: 300,
    delay: 0.5,
    autoAlpha: 0,
    stagger: 0.05
});


gsap.from(stars.chars, {
    scrollTrigger: {
        trigger: ".stars",
        scroller: "body",
        start: "top 90%",
        toggleActions: "play none none reverse",
    },
    x: -200,
    scale: 0.5,
    delay: 0,
    opacity: 0,
    stagger: 0.05
});

let starsHover = document.querySelectorAll(".stars span")

starsHover.forEach(star => {
    let rotateDegree = Math.floor(Math.random() * 20 + 10);
    star.addEventListener("mouseenter", () => {
        gsap.to(star, {
            x: `${rotateDegree}`,
            transformOrigin: "center"
        })
    })
    star.addEventListener("mouseleave", () => {
        gsap.to(star, {
            x: 0,
            transformOrigin: "center"
        })
    })
})
let navLinksHover = document.querySelectorAll(".link a")

navLinksHover.forEach(link => {
    let linkHover = SplitText.create(link, {
        type: "chars"
    })

    link.addEventListener("mouseenter", () => {
        gsap.from(linkHover.chars, {
            y: 100,
            stagger: 0.05,
            transformOrigin: "top"
        })
    })
})

let footerLinksHover = document.querySelectorAll(".footer-link a")

footerLinksHover.forEach(link => {
    let linkHover = SplitText.create(link, {
        type: "chars"
    })

    link.addEventListener("mouseenter", () => {
        gsap.from(linkHover.chars, {
            y: -100,
            stagger: 0.02,
            transformOrigin: "top"
        })
    })
})

let touchTextHover = SplitText.create(".touch", {
    type: "chars",
    charsClass: "char++"
})

let touchLetter = document.querySelector(".touch")

touchLetter.addEventListener("mouseenter", () => {
    gsap.from(touchTextHover.chars, {
        scale: 1.1,
        stagger: 0.1
    })
})
touchLetter.addEventListener("mouseleave", () => {
    gsap.to(touchTextHover.chars, {
        scale: 1
    })
})

// link.addEventListener("mouseenter", () => {
//     gsap.from(linkHover.chars, {
//         y: -100,
//         stagger: 0.02,
//         transformOrigin: "top"
//     })
// })