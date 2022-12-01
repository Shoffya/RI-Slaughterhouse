var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');


function navbarActive1(id) {
    if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#content") {
        nav2.classList.remove('active');
        nav3.classList.remove('active');
        nav1.classList.add('active');
        about.style.display = "none";
        title2.style.display = "none";
        title.style.display = "flex";
    }
    else {
        nav1.classList.add('active');
        about.style.display = "none";
        title2.style.display = "none";
        title.style.display = "flex";
    }
}

function navbarActive2(id) {
    if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
        nav1.classList.remove('active');
        nav3.classList.remove('active');
        nav2.classList.add('active');
        about.style.display = "none";
        title2.style.display = "none";
        title.style.display = "flex";

    }
    else {
        nav2.classList.add('active');
        about.style.display = "none";
        title2.style.display = "none";
        title.style.display = "flex";
    }
}

function navbarActive3(id) {
    if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#title2") {
        nav1.classList.remove('active');
        nav2.classList.remove('active');
        nav3.classList.add('active');
        title.style.display = "none";
        about.style.display = "none";
        title2.style.display = "flex";
    }
    else {
        nav3.classList.add('active');
        title.style.display = "none";
        about.style.display = "none";
        title2.style.display = "flex";
    }
}