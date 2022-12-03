var title = document.getElementById('title');
var about = document.getElementById('about');
var title2 = document.getElementById('title2');
var navBarList = document.getElementById('navBarList');
var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');
var nav3 = document.getElementById('option3');
var navActive;

setInterval(() => {
    navBarList.addEventListener('click', (e) => {
        if (e.target.id == "option1") {
            nav2.classList.remove('active');
            nav3.classList.remove('active');
            nav1.classList.add('active');
            navActive = nav1;

            links(navActive);

        }
        else if (e.target.id == "option2") {
            nav1.classList.remove('active');
            nav3.classList.remove('active');
            nav2.classList.add('active');
            navActive = nav2;

            links(navActive);
        }
        else if (e.target.id == "option3") {
            nav1.classList.remove('active');
            nav2.classList.remove('active');
            nav3.classList.add('active');
            navActive = nav3;

            links(navActive);
        }
    });
}, 500);

function links(navBar) {
    if (window.location.href == "https://shoffya.github.io/RI-Slaughterhouse/") {
        window.location.href = "https://shoffya.github.io/RI-Slaughterhouse/#content";
    }
    else if (navBar == nav1) {

        title.style.display = "flex";
        about.style.display = "none";
        title2.style.display = "none";

        console.log("Content");
    }
    else if (navBar == nav2) {

        about.style.display = "flex";
        title.style.display = "none";
        title2.style.display = "none";

        console.log("About");
    }

    else if (navBar == nav3) {

        title2.style.display = "flex";
        title.style.display = "none";
        about.style.display = "none";

        console.log("Title TESTE");
    }
}