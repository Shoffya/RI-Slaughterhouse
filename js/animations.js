var video = document.getElementById('background');
var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');

function onOff() {
    setTimeout(() => {
        if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/") {
            about.style.display = "none";
            title2.style.display = "none";
            title.style.display = "flex";
            nav2.classList.remove('active');
            nav3.classList.remove('active');
            nav1.classList.add('active');
        }
        else if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
            title.style.display = "none";
            title2.style.display = "none";
            about.style.display = "flex";
            nav1.classList.remove('active');
            nav3.classList.remove('active');
            nav2.classList.add('active');
        }

        else if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#title2") {
            title.style.display = "none";
            about.style.display = "none";
            title2.style.display = "flex";
            nav1.classList.remove('active');
            nav2.classList.remove('active');
            nav3.classList.add('active');
        }
    }, 1000);
}

setInterval(() => {
    onOff();
}, 500);