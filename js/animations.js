var video = document.getElementById('background');
var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');

function onOff() {
    if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/") {
        setTimeout(() => {
            title.style.display = "flex";
            about.style.display = "none";
            title2.style.display = "none";
            nav2.classList.remove('active');
            nav3.classList.remove('active');
            nav1.classList.add('active');
        }, 1000);

    }
    else if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
        setTimeout(() => {
            about.style.display = "flex";
            title.style.display = "none";
            title2.style.display = "none";
            nav1.classList.remove('active');
            nav3.classList.remove('active');
            nav2.classList.add('active');
        }, 1000);
    }

    else if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#title2") {
        setTimeout(() => {
            title2.style.display = "flex";
            title.style.display = "none";
            about.style.display = "none";
            nav1.classList.remove('active');
            nav2.classList.remove('active');
            nav3.classList.add('active');
        }, 1000);
    }
}

setInterval(() => {
    onOff();
}, 500);