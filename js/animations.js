var video = document.getElementById('background');
var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');

function onOff() {
    if (nav1.classList.contains('active') === true || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#content" || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/") {
        about.style.display = "none";
        title2.style.display = "none";
        title.style.display = "flex";
        video.play();
    }
    if (nav2.classList.contains('active') === true || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
        title.style.display = "none";
        title2.style.display = "none";
        about.style.display = "flex";
        video.play();
    }
    if (nav3.classList.contains('active') === true || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#title2") {
        title.style.display = "none";
        about.style.display = "none";
        title2.style.display = "flex";
        video.play();
    }

}

setInterval(() => {
    onOff();
}, 500);