let label = document.getElementById("messageL")
let select = document.querySelector('#subject');
let btn = document.querySelector('#submit');

btn.addEventListener('click', () => {
    if (message.style.display == "none") {
        window.onpointermove(`/mailto:turpyun@gmail.com?subject=${select.options[select.selectedIndex].value}`);
    }
    else if (message.style.display == "flex" && message.value != "") {
        window.open(`/mailto:turpyun@gmail.com?subject=${select.options[select.selectedIndex].value}&body=${message.value}`);
    }
    else {
        alert("por favor preencha o campo de menssagem para que a gente possa te ajudar!");
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