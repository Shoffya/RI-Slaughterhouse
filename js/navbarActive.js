var video = document.getElementById('background');
var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');
var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');

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
        title.style.display = "flex";
        about.style.display = "none";
        title2.style.display = "none";
    }

    window.location.reload();
});

nav2.addEventListener('click', () => {
    if (nav2.classList.contains('active') === false) {
        if (nav1.classList.contains('active') || nav3.classList.contains('active')) {
            nav1.classList.remove('active')
            nav3.classList.remove('active')
            nav2.classList.add('active')
            title.style.display = "none";
            about.style.display = "flex";
            title2.style.display = "none";

        }
    } else {
        nav2.classList.add('active')
        title.style.display = "none";
        about.style.display = "flex";
        title2.style.display = "none";
    }

    window.location.reload();
});

nav3.addEventListener('click', () => {
    if (nav3.classList.contains('active') === false) {
        if (nav1.classList.contains('active') || nav2.classList.contains('active')) {
            nav1.classList.remove('active')
            nav2.classList.remove('active')
            nav3.classList.add('active')
            title.style.display = "none";
            about.style.display = "none";
            title2.style.display = "flex";
        }
    } else {
        nav3.classList.add('active')
        title.style.display = "none";
        about.style.display = "none";
        title2.style.display = "flex";
    }

    window.location.reload();
});

// setInterval(() => {
//     switch (test) {
//         case 0:
//             console.log('/');
//             break;
//         case 1:
//             console.log('content');
//             break;
//         case 2:
//             console.log('about');
//             break;
//         case 3:
//             console.log('title2');
//             break;
//         default:
//             console.log(`what's ?`);
//     }
// }, 500);