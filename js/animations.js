var video = document.getElementById('background');
var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');
var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');

function onOff() {

    if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/") {
        window.location.href = "https://shoffya.github.io/RI-Slaughterhouse/#content";
    }
    else if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#content") {
        title.style.display = "flex";
        about.style.display = "none";
        title2.style.display = "none";
        nav2.classList.remove('active');
        nav3.classList.remove('active');
        nav1.classList.add('active');

        console.log("Content");

    }
    else if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#about") {

        about.style.display = "flex";
        title.style.display = "none";
        title2.style.display = "none";
        nav1.classList.remove('active');
        nav3.classList.remove('active');
        nav2.classList.add('active');

        console.log("About");
    }

    else if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#title2") {

        title2.style.display = "flex";
        title.style.display = "none";
        about.style.display = "none";
        nav1.classList.remove('active');
        nav2.classList.remove('active');
        nav3.classList.add('active');

        console.log("Title TESTE");
    }
}

setInterval(() => {
    onOff();
}, 500);