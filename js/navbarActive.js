var video = document.getElementById('background');
var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');
var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');
var test;

nav1.addEventListener('click', () => {
    if (nav1.classList.contains('active') === false) {
        if (nav2.classList.contains('active') || nav3.classList.contains('active')) {
            nav2.classList.remove('active')
            nav3.classList.remove('active')
            nav1.classList.add('active')
            title.style.display = "flex";
            about.style.display = "none";
            title2.style.display = "none";

            test = window.location.href;

            console.log(test);
        }
    } else {
        nav1.classList.add('active')
        title.style.display = "flex";
        about.style.display = "none";
        title2.style.display = "none";

        test = window.location.href;

        console.log(test);
    }
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

            test = window.location.href;

            console.log(test);
        }
    } else {
        nav2.classList.add('active')
        title.style.display = "none";
        about.style.display = "flex";
        title2.style.display = "none";

        test = window.location.href;

        console.log(test);
    }
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

            test = window.location.href;

            console.log(test);
        }
    } else {
        nav3.classList.add('active')
        title.style.display = "none";
        about.style.display = "none";
        title2.style.display = "flex";

        test = window.location.href;

        console.log(test);
    }
});