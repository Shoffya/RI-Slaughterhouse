var video = document.getElementById('background');
var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');
var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');
var navB;

nav1.addEventListener('click', () => {
    nav2.classList.remove('active');
    nav3.classList.remove('active');
    nav1.classList.add('active');
    title.style.display = "flex";
    about.style.display = "none";
    title2.style.display = "none";
});

nav2.addEventListener('click', () => {
    nav1.classList.remove('active');
    nav3.classList.remove('active');
    nav2.classList.add('active');
    about.style.display = "flex";
    title.style.display = "none";
    title2.style.display = "none";
});

nav3.addEventListener('click', () => {
    nav1.classList.remove('active');
    nav2.classList.remove('active');
    nav3.classList.add('active');
    title2.style.display = "flex";
    title.style.display = "none";
    about.style.display = "none";
});

setInterval(() => {
    if (window.location == "https://shoffya.github.io/RI-Slaughterhouse/#content") {
        nav2.classList.remove('active');
        nav3.classList.remove('active');
        nav1.classList.add('active');
        title.style.display = "flex";
        about.style.display = "none";
        title2.style.display = "none";

        console.log("content");
    }
    else if (window.location == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
        nav1.classList.remove('active');
        nav3.classList.remove('active');
        nav2.classList.add('active');
        about.style.display = "flex";
        title.style.display = "none";
        title2.style.display = "none";

        console.log("about");
    }
    else if (window.location == "https://shoffya.github.io/RI-Slaughterhouse/#title2") {
        nav1.classList.remove('active');
        nav2.classList.remove('active');
        nav3.classList.add('active');
        title2.style.display = "flex";
        title.style.display = "none";
        about.style.display = "none";

        console.log("title2");
    }
    else {
        console.log(".../");
    }
}, 500);