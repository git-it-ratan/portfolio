gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);


const cursor = document.querySelector('.cursor');

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

window.addEventListener("load", () => {
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

    let linkSplit = SplitText.create(".link", {
        type: "chars"
    });

    gsap.from(".skill-card", {
        scrollTrigger: {
            trigger: ".skills",
            start: "top 80%",
            toggleActions: "play none none reverse"
        },
        // y: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power3.out"
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

    let starsHover = document.querySelectorAll(".stars span");
    starsHover.forEach(star => {
        let rotateDegree = Math.floor(Math.random() * 20 + 10);
        star.addEventListener("mouseenter", () => {
            gsap.to(star, {
                x: `${rotateDegree}`,
                transformOrigin: "center"
            });
        });
        star.addEventListener("mouseleave", () => {
            gsap.to(star, {
                x: 0,
                transformOrigin: "center"
            });
        });
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

// --- Project Modal Logic ---
const projectDetails = {
    'ArtsByFnB': {
        title: 'ArtsByFnB',
        image: 'images/ArtsByFnB.png',
        link: 'https://git-it-ratan.github.io/artsbyfnb/',
        desc: 'ArtsByFnB is a clean, handmade craft showcase website that highlights artisanal home décor and gift items. It combines modern styling with simple navigation to help visitors browse products and brand story easily. ',
        colors: ['#ffd6ee', '#070a13', '#ed7b84'],
        fonts: ['Bona Nova', 'Poppins'],
        tech: ['HTML', 'CSS', 'JavaScript', 'GSAP']
    },
    'Meridian': {
        title: 'Meridian',
        image: 'images/meridian.png',
        link: 'https://git-it-ratan.github.io/meridian/',
        desc: 'Meridian is an AI-powered career guidance web app that analyzes your skills and interests to recommend a best-fit role and personalized roadmap. It combines a sleek frontend with a Node/Express backend and Google Gemini AI. The app turns career goals into actionable learning steps.',
        colors: ['#ebebeb', '#050505', '#6153CC'],
        fonts: ['Bricolage Grotesque', 'Melodrama'],
        tech: ['HTML', 'CSS', 'JavaScript', 'GSAP', 'Node.js', 'Express']
    },
    'Avisa': {
        title: 'Avisa',
        image: 'images/avisa.png',
        link: 'https://git-it-ratan.github.io/avisa/',
        desc: 'Built for IIT Patna\'s frontend competition; conceptualized and led the full creative direction of an interactive ocean-depth storytelling experience.',
        colors: ['#0a3d6b', '#d9e5d6', '#8CAE68'],
        fonts: ['Papyrus', 'Garamond Premier Pro Display'],
        tech: ['HTML', 'CSS', 'JavaScript', 'GSAP']
    },
    'CheckTheFit': {
        title: 'CheckTheFit',
        image: 'images/CheckTheFit.png',
        link: 'https://git-it-ratan.github.io/checkthefit/',
        desc: '[Ongoing] CheckTheFit is a lightweight web project that helps users explore outfit options with a clean, responsive UI. It combines HTML, CSS, and JavaScript to deliver a polished browsing experience for checking style and fit. The project is ideal for showcasing a fashion-focused landing page or interactive product preview.',
        colors: ['#fff', '#000', '#b7a7e6'],
        fonts: ['Kugile', 'Hurricane', 'Outfit'],
        tech: ['HTML', 'CSS', 'JavaScript', 'GSAP']
    }
};

const modal = document.getElementById('projectModal');
const closeModalBtn = document.getElementById('closeModal');
const modalTitleEl = document.getElementById('modalTitle');
const modalImgEl = document.getElementById('modalImg');
const modalDescEl = document.getElementById('modalDesc');
const modalColorsEl = document.getElementById('modalColors');
const modalFontsEl = document.getElementById('modalFonts');
const modalTechEl = document.getElementById('modalTech');
const modalVisitLink = document.getElementById('modalVisitLink');

projectItems.forEach((item) => {
    item.addEventListener('click', (e) => {
        // Prevent default navigation
        e.preventDefault();

        const titleElement = item.querySelector('.projectText h3');
        if (!titleElement) return;

        const title = titleElement.innerText.trim();
        const data = projectDetails[title];

        if (data) {
            modalTitleEl.innerText = data.title;
            modalImgEl.src = data.image;
            modalDescEl.innerText = data.desc;

            if (!data.link || data.link === '#') {
                modalVisitLink.style.display = 'none';
            } else {
                modalVisitLink.style.display = 'inline-block';
                modalVisitLink.href = data.link;
            }

            modalColorsEl.innerHTML = '';
            data.colors.forEach(color => {
                const circle = document.createElement('div');
                circle.className = 'color-circle';
                circle.style.backgroundColor = color;

                const tooltip = document.createElement('span');
                tooltip.className = 'color-tooltip';
                tooltip.innerText = color;

                circle.appendChild(tooltip);
                modalColorsEl.appendChild(circle);
            });

            modalFontsEl.innerHTML = '';
            data.fonts.forEach(font => {
                const li = document.createElement('li');
                li.innerText = font;
                modalFontsEl.appendChild(li);
            });

            modalTechEl.innerHTML = '';
            data.tech.forEach(tech => {
                const li = document.createElement('li');
                li.innerText = tech;
                modalTechEl.appendChild(li);
            });

            modal.classList.add('active');

            document.body.style.overflowY = 'hidden';
        }
    });
});

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflowY = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflowY = 'auto';
    }
});