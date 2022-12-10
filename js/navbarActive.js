var video = document.getElementById('background');
var homeStart = document.getElementById('homeStart');
var about = document.getElementById('about');
var recoverPassword = document.getElementById('recoverPassword');
var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');

setInterval(() => {
    if (window.location == "/#home") {
        nav2.classList.remove('active');
        nav3.classList.remove('active');
        nav1.classList.add('active');
        homeStart.style.display = "flex";
        about.style.display = "none";
        recoverPassword.style.display = "none";
    }
    else if (window.location == "/#about") {
        nav1.classList.remove('active');
        nav3.classList.remove('active');
        nav2.classList.add('active');
        about.style.display = "flex";
        homeStart.style.display = "none";
        recoverPassword.style.display = "none";
    }
    else if (window.location == "/#recoverPassword") {
        nav1.classList.remove('active');
        nav2.classList.remove('active');
        nav3.classList.add('active');
        recoverPassword.style.display = "flex";
        homeStart.style.display = "none";
        about.style.display = "none";
    }
    else {
        nav2.classList.remove('active');
        nav3.classList.remove('active');
        nav1.classList.add('active');
        homeStart.style.display = "flex";
        about.style.display = "none";
        recoverPassword.style.display = "none";
    }
}, 500);