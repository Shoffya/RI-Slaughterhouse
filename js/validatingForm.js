let btn = document.querySelector("#button");

function validatingForm() {
    // var message = document.getElementById("formEmail").elements.namedItem("message").value;
    var message = document.querySelector(".message")
    var selectSubject = document.getElementById("subject");
    var opcaoTexto = selectSubject.options[select.selectedIndex].text;

    if (opcaoTexto == "Password Recovery") {
        window.location.href = "mailto:turpyun.rigames@gmail.com?subject=" + opcaoTexto;
        console.log(tagA);
    }
}

btn.addEventListener('click', () => {
    validatingForm();
});