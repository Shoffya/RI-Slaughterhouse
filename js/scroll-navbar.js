var nav = document.querySelector('nav');
var nav1 = document.getElementById('option1');
var nav2 = document.getElementById('option2');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 198) {
        nav.classList.add('bgBlack', 'shadow');
    } else {
        nav.classList.remove('bgBlack', 'shadow');
    }

    if (window.pageYOffset == 0 || window.pageYOffset < 108) {
        nav2.classList.remove('active')
        nav1.classList.add('active')
    } else if (window.pageYOffset >= 108) {
        nav1.classList.remove('active')
        nav2.classList.add('active')
    }
})

