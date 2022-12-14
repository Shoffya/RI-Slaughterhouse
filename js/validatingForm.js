let label = document.getElementById("messageL")
let select = document.querySelector('#subject');
let btn = document.querySelector('#submit');
let alertBootstrap = document.querySelector('.alert');

btn.addEventListener('click', () => {
    if (message.style.display == "none") {
        window.location.href = `mailto:turpyun@gmail.com?subject=${select.options[select.selectedIndex].value}`;
    }
    else if (message.style.display == "flex" && message.value != "") {
        window.location.href = `mailto:turpyun@gmail.com?subject=${select.options[select.selectedIndex].value}&body=${message.value}`;
    }
    else if (message.style.display == "flex" && message.value == "") {
        alertBootstrap.style.display = "flex";

        setTimeout(() => {
            alertBootstrap.style.display = "none";
        }, 10000)
    }
});

function updateSelect() {
    let message = document.getElementById("message")

    let optionValue = select.options[select.selectedIndex];

    let value = optionValue.value;
    let text = optionValue.text;

    if (value == "passwordRecovery") {
        message.style.display = "none";
        label.style.display = "none";
        console.log(text);
    }
    else if (value == "gameProblem") {
        message.style.display = "flex";
        label.style.display = "flex";
        console.log(text);
    }
    else if (value == "Others") {
        message.style.display = "flex";

        label.style.display = "flex";
        console.log(text);
    }
}

updateSelect();