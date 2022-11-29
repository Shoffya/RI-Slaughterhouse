var nav1 = document.querySelector('.link1');
var nav2 = document.querySelector('.link2');
var nav3 = document.querySelector('.link3');

nav1.addEventListener('click', () => {
    if (nav1.classList.contains('active') === false) {
        if (nav2.classList.contains('active') || nav3.classList.contains('active')) {
            nav2.classList.remove('active');
            nav3.classList.remove('active');
            nav1.classList.add('active');
        }
    } else {
        nav1.classList.add('active');
    }
});

nav2.addEventListener('click', () => {
    if (nav2.classList.contains('active') === false) {
        if (nav1.classList.contains('active') || nav3.classList.contains('active')) {
            nav1.classList.remove('active');
            nav3.classList.remove('active');
            nav2.classList.add('active');
        }
    } else {
        nav2.classList.add('active');
    }
});

nav3.addEventListener('click', () => {
    if (nav3.classList.contains('active') === false) {
        if (nav1.classList.contains('active') || nav2.classList.contains('active')) {
            nav1.classList.remove('active');
            nav2.classList.remove('active');
            nav3.classList.add('active');
        }
    } else {
        nav3.classList.add('active');
    }
});


// function navbarActive1(id) {
//     if (nav1.classList.contains('active') === false) {
//         if (nav2.classList.contains('active') || nav3.classList.contains('active')) {
//             nav2.classList.remove('active');
//             nav3.classList.remove('active');
//             nav1.classList.add('active');
//         }
//     } else {
//         nav1.classList.add('active');
//     }
// }

// function navbarActive2(id) {
//     if (nav2.classList.contains('active') === false) {
//         if (nav1.classList.contains('active') || nav3.classList.contains('active')) {
//             nav1.classList.remove('active');
//             nav3.classList.remove('active');
//             nav2.classList.add('active');
//         }

//     }
//     else {
//         nav2.classList.add('active');
//     }
// }

// function navbarActive3(id) {

//     if (nav3.classList.contains('active') === false) {
//         if (nav1.classList.contains('active') || nav2.classList.contains('active')) {
//             nav1.classList.remove('active');
//             nav2.classList.remove('active');
//             nav3.classList.add('active');
//         }

//     }
//     else {
//         nav3.classList.add('active');
//     }
// }