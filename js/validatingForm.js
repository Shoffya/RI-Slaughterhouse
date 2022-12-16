let label = document.getElementById("messageL")
let select = document.querySelector('#subject');
let btn = document.querySelector('#submit');

btn.addEventListener('click', () => {
    if (message.style.display == "flex" && message.value == "") {
        alert("por favor preencha o campo de menssagem para que a gente possa te ajudar!");
    } else {
        console.log(message.value);
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