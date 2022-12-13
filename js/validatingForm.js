function validatingForm() {
    // var message = document.getElementById("formEmail").elements.namedItem("message").value;
    var btnSubmit = document.querySelector(".btnSubmit");
    var subject = document.getElementById("subject");
    var opcaoTexto = subject.options[subject.selectedIndex].text;
    var opcaoValor = subject.options[subject.selectedIndex].value;

    if (opcaoTexto == "Password Recovery") {
        btnSubmit.href = `mailto:turpyun.rigames@gmail.com?subject=Password Recovery`;
        console.log(opcaoTexto);
    }
}