// --- Menu Toggle ---
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// --- Scroll Navigation Highlight ---
window.onscroll = () => {
    const scrollY = window.scrollY;

    sections.forEach(section => {
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (scrollY >= offset && scrollY < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));
            const currentLink = document.querySelector('header nav a[href*="' + id + '"]');
            if (currentLink) {
                currentLink.classList.add('active');
            }
        }
    });

    // Close navbar when scrolling (for mobile)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

// --- Typing Animation ---
const roles = [
    "Full Stack Web Developer",
    "Frontend Designer",
    "UI / UX Designer",
    "Web Developer",
    "Software Tester"
];

let index = 0;
let charIndex = 0;
let typingSpeed = 100;
let erasingSpeed = 50;
let delayBetween = 2000;
const typedText = document.getElementById("typed-text");

function type() {
    if (charIndex < roles[index].length) {
        typedText.textContent += roles[index].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingSpeed);
    } else {
        setTimeout(erase, delayBetween);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = roles[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, typingSpeed);
    } else {
        index = (index + 1) % roles.length;
        setTimeout(type, 500);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    if (typedText) {
        setTimeout(type, 1000);
    }

    // Theme toggle initialization
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Load saved theme from localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-theme');
        themeToggle.checked = true;
    }

    // Theme toggle switch
    themeToggle.addEventListener('change', () => {
        body.classList.toggle('dark-theme');
        const theme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        localStorage.setItem('theme', theme);
    });
});
