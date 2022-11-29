var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');

function onOff() {
    if (nav1.classList.contains('active') === true || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#content" || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/") {
        title.style.display = "flex";
        about.style.display = "none";
        title2.style.display = "none";
    }
    if (nav2.classList.contains('active') === true || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
        title.style.display = "none";
        about.style.display = "flex";
        title2.style.display = "none";
    }
    if (nav3.classList.contains('active') === true || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
        title.style.display = "none";
        about.style.display = "none";
        title2.style.display = "flex";
    }
}

setInterval(() => {
    onOff();
    console.log(window.location.href)
}, 500);