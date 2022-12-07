var video = document.getElementById('background');
var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');
var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');
var test;

nav1.addEventListener('click', () => {
    nav2.classList.remove('active');
    nav3.classList.remove('active');
    nav1.classList.add('active');
    title.style.display = "flex";
    about.style.display = "none";
    title2.style.display = "none";

    test = 1;
});

nav2.addEventListener('click', () => {
    nav1.classList.remove('active');
    nav3.classList.remove('active');
    nav2.classList.add('active');
    title.style.display = "none";
    about.style.display = "flex";
    title2.style.display = "none";

    test = 2;
});

nav3.addEventListener('click', () => {
    nav1.classList.remove('active');
    nav2.classList.remove('active');
    nav3.classList.add('active');
    title.style.display = "none";
    about.style.display = "none";
    title2.style.display = "flex";

    test = 3;
});

setInterval(() => {
    if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/") {
        nav2.classList.remove('active');
        nav3.classList.remove('active');
        nav1.classList.add('active');
        title.style.display = "flex";
        about.style.display = "none";
        title2.style.display = "none";
    }
}, 500);