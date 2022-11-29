var title = document.getElementById('title');
var about = document.getElementById('about');

function onOff() {
    if (nav1.classList.contains('active') === true) {
        title.style.display = "flex";
        about.style.display = "none";
    }
    if (nav2.classList.contains('active') === true) {
        title.style.display = "none";
        about.style.display = "flex";
    }
    // else if (nav3.classList.contains('active') === true) {
    //     about.style.display = "none";
    // }
}

setInterval(() => {
    onOff();
}, 500);