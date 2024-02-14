/*-------------------- TOGGLE ICON NAVBAR -------------------- */ 

let newIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

newIcon.onclick = () => {
    newIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}


/*-------------------- SCROL SECTION ACTIVE LINK -------------------- */ 

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar");

window.onscroll = () => {
    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 150;
        let height = section.offsetHeight;
        let id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach.apply(link => {
                link.classList.remove("active");
                document.querySelector("header nav a[href*='" + id + "']").classList.add("active");
            });
        };
    });

    /*-------------------- STICKY NAVBAR -------------------- */ 

    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 100);

    /*-------------------- REMOVE TOGGLE ICON AND NAVBAR -------------------- */ 

    newIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

/*-------------------- SCROLL REVEAL -------------------- */

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
});

ScrollReveal().reveal('.home-content , .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img , .project-container , .portfolio-box , .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

/*-------------------- TYPED JS -------------------- */

window.addEventListener('DOMContentLoaded', () => {
    const typed = new Typed('.multiple-text', {
        strings: ['Software Developer', 'Frontend Developer', 'Student, Class X'],
        typeSpeed: 70,
        backSpeed: 70,
        backDelay: 1000,
        loop: true,
    },);
});

// end 