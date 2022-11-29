var video = document.getElementById('background');
var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');

function onOff() {
    if (nav1.classList.contains('active') === true || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/" || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#content") {
        about.style.display = "none";
        title2.style.display = "none";
        title.style.display = "flex";
    }
    if (nav2.classList.contains('active') === true || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
        title.style.display = "none";
        title2.style.display = "none";
        about.style.display = "flex";
    }
    if (nav3.classList.contains('active') === true || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#title2") {
        title.style.display = "none";
        about.style.display = "none";
        title2.style.display = "flex";
    }

}

setInterval(() => {
    video.play();
    onOff();

}, 500);