var video = document.getElementById('background');
var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');
var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');

var test = 0;

setInterval(() => {
    nav1.addEventListener('click', () => {
        if (nav1.classList.contains('active') === false) {
            if (nav2.classList.contains('active') || nav3.classList.contains('active')) {
                nav2.classList.remove('active')
                nav3.classList.remove('active')
                nav1.classList.add('active')
                title.style.display = "flex";
                about.style.display = "none";
                title2.style.display = "none";
            }
        } else {
            nav1.classList.add('active')
        }

        test = 1;
    });

    nav2.addEventListener('click', () => {
        if (nav2.classList.contains('active') === false) {
            if (nav1.classList.contains('active') || nav3.classList.contains('active')) {
                nav1.classList.remove('active')
                nav3.classList.remove('active')
                nav2.classList.add('active')
                about.style.display = "flex";
                title.style.display = "none";
                title2.style.display = "none";
            }
        } else {
            nav2.classList.add('active')
        }

        test = 2;
    });

    nav3.addEventListener('click', () => {
        if (nav3.classList.contains('active') === false) {
            if (nav1.classList.contains('active') || nav2.classList.contains('active')) {
                nav1.classList.remove('active')
                nav2.classList.remove('active')
                nav3.classList.add('active')
                title2.style.display = "flex";
                title.style.display = "none";
                about.style.display = "none";
            }
        } else {
            nav3.classList.add('active')
        }

        test = 3;
    });

    switch (test) {
        case 0:
            if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/") {
                console.log('/');
                nav2.classList.remove('active')
                nav3.classList.remove('active')
                nav1.classList.add('active')
                title.style.display = "flex";
                about.style.display = "none";
                title2.style.display = "none";
            }
            break;
        case 1:
            if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#content") {
                console.log('content');
                nav2.classList.remove('active')
                nav3.classList.remove('active')
                nav1.classList.add('active')
                title.style.display = "flex";
                about.style.display = "none";
                title2.style.display = "none";
            }
            break;
        case 2:
            if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
                console.log('about');
                nav1.classList.remove('active')
                nav3.classList.remove('active')
                nav2.classList.add('active')
                about.style.display = "flex";
                title.style.display = "none";
                title2.style.display = "none";
            }
            break;
        case 3:
            if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#title2") {
                console.log('title2');
                nav1.classList.remove('active')
                nav2.classList.remove('active')
                nav3.classList.add('active')
                title2.style.display = "flex";
                title.style.display = "none";
                about.style.display = "none";
            }
            break;
        default:
            console.log(`what's ?`);
    }
}, 500);

// if (test = 0) {
//     if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/") {
//         console.log('/');
//     }

// }

// if (test = 1) {
//     if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#content") {
//         console.log('content');
//     }

// }

// if (test = 2) {
//     if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#about") {
//         console.log('about');
//     }

// }

// if (test = 3) {
//     if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/#title2") {
//         console.log('title2');
//     }
// }