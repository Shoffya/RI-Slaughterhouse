var message = document.querySelector(".message");
var messageTextarea = document.querySelector("#message");

function validatingForm() {
    var btnSubmit = document.querySelector(".btnSubmit");
    var subject = document.getElementById("subject");
    var opcaoTexto = subject.options[subject.selectedIndex].text;

    if (opcaoTexto == "Password Recovery") {
        message.style.display = "none";
        btnSubmit.href = `mailto:turpyun.rigames@gmail.com?subject=${opcaoTexto}`;
    }
    else {
        message.style.display = "flex";
        if (message.value == null) {
            alert("Preencha por favor");
        }
        else {
            btnSubmit.href = `mailto:turpyun.rigames@gmail.com?subject=${opcaoTexto}&body=${message.value}`;
        }
    }
}