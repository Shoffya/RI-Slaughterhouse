var video = document.getElementById('background');
var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');
var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');
var test = "https://shoffya.github.io/RI-Slaughterhouse/";

nav1.addEventListener('click', () => {
    if (nav1.classList.contains('active') === false) {
        if (nav2.classList.contains('active') || nav3.classList.contains('active')) {
            nav2.classList.remove('active')
            nav3.classList.remove('active')
            nav1.classList.add('active')
        }
    } else {
        nav1.classList.add('active')
    }

    test = "https://shoffya.github.io/RI-Slaughterhouse/#content";
});

nav2.addEventListener('click', () => {
    if (nav2.classList.contains('active') === false) {
        if (nav1.classList.contains('active') || nav3.classList.contains('active')) {
            nav1.classList.remove('active')
            nav3.classList.remove('active')
            nav2.classList.add('active')

        }
    } else {
        nav2.classList.add('active')
    }

    test = "https://shoffya.github.io/RI-Slaughterhouse/#about";
});

nav3.addEventListener('click', () => {
    if (nav3.classList.contains('active') === false) {
        if (nav1.classList.contains('active') || nav2.classList.contains('active')) {
            nav1.classList.remove('active')
            nav2.classList.remove('active')
            nav3.classList.add('active')
        }
    } else {
        nav3.classList.add('active')
    }

    test = "https://shoffya.github.io/RI-Slaughterhouse/#title2";
});

setInterval(() => {

    switch (test) {
        case "https://shoffya.github.io/RI-Slaughterhouse/":
            console.log('/');
            title.style.display = "flex";
            about.style.display = "none";
            title2.style.display = "none";
            break;
        case "https://shoffya.github.io/RI-Slaughterhouse/#content":
            console.log('content');
            title.style.display = "flex";
            about.style.display = "none";
            title2.style.display = "none";
            break;
        case "https://shoffya.github.io/RI-Slaughterhouse/#about":
            console.log('about');
            title.style.display = "none";
            about.style.display = "flex";
            title2.style.display = "none";
            break;
        case "https://shoffya.github.io/RI-Slaughterhouse/#title2":
            console.log('title2');

            title.style.display = "none";
            about.style.display = "none";
            title2.style.display = "flex";
            break;
        default:
            console.log(`what's ?`);
    }
}, 500);