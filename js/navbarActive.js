var home = document.getElementById('home');
var about = document.getElementById('about');
var recovery = document.getElementById('recovery');
var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');

setInterval(() => {
    if (window.location == "https://shoffya.github.io/RI-Slaughterhouse/#home") {
        nav2.classList.remove('active');
        nav3.classList.remove('active');
        nav1.classList.add('active');
        home.style.display = "flex";
        about.style.display = "none";
        recovery.style.display = "none";
    }
    else if (window.location == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
        nav1.classList.remove('active');
        nav3.classList.remove('active');
        nav2.classList.add('active');
        about.style.display = "flex";
        home.style.display = "none";
        recovery.style.display = "none";
    }
    else if (window.location == "https://shoffya.github.io/RI-Slaughterhouse/#recovery") {
        nav1.classList.remove('active');
        nav2.classList.remove('active');
        nav3.classList.add('active');
        recovery.style.display = "flex";
        home.style.display = "none";
        about.style.display = "none";
    }
    else {
        nav2.classList.remove('active');
        nav3.classList.remove('active');
        nav1.classList.add('active');
        home.style.display = "flex";
        about.style.display = "none";
        recovery.style.display = "none";
    }
}, 500);