var title = document.getElementById('title');
var about = document.getElementById('about');

function onOff() {
    if (nav1.classList.contains('active') === true || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#content" || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/") {
        title.style.display = "flex";
        about.style.display = "none";
    }
    if (nav2.classList.contains('active') === true || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
        title.style.display = "none";
        about.style.display = "flex";
    }
    if (nav3.classList.contains('active') === true || window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
        title.style.display = "none";
        about.style.display = "none";
    }
}

setInterval(() => {
    onOff();
    console.log(window.location.href)
}, 500);