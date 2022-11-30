var video = document.getElementById('background');
var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');

function onOff() {
    video.play();
    if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#content") {
        if (nav2.classList.contains('active') || nav3.classList.contains('active')) {
            nav2.classList.remove('active');
            nav3.classList.remove('active');
            nav1.classList.add('active');
            about.style.display = "none";
            title2.style.display = "none";
            title.style.display = "flex";
        }
    } else {
        nav1.classList.add('active');
        about.style.display = "none";
        title2.style.display = "none";
        title.style.display = "flex";
    }
    if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
        if (nav1.classList.contains('active') || nav3.classList.contains('active')) {
            nav1.classList.remove('active');
            nav3.classList.remove('active');
            nav2.classList.add('active');
            title.style.display = "none";
            title2.style.display = "none";
            about.style.display = "flex";
        }
    }
    else {
        nav2.classList.add('active');
        title.style.display = "none";
        title2.style.display = "none";
        about.style.display = "flex";
    }
    if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#title2") {
        if (nav1.classList.contains('active') || nav2.classList.contains('active')) {
            nav1.classList.remove('active');
            nav2.classList.remove('active');
            nav3.classList.add('active');
            title.style.display = "none";
            about.style.display = "none";
            title2.style.display = "flex";
        }

    }
    else {
        nav3.classList.add('active');
        title.style.display = "none";
        about.style.display = "none";
        title2.style.display = "flex";
    }
}

setInterval(() => {
    onOff();
}, 500);