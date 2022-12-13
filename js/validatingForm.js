function validatingForm() {
    // var message = document.getElementById("formEmail").elements.namedItem("message").value;
    var subject = document.getElementById("subject");
    var opcaoTexto = subject.options[subject.selectedIndex].text;
    var opcaoValor = subject.options[subject.selectedIndex].value;
    console.log(opcaoTexto); // Ferrari
    console.log(opcaoValor); // ferrari

    if (opcaoTexto == "Password Recovery") {
        // btnSubmit.href = `mailto:turpyun.rigames@gmail.com?subject=${opcaoTexto}`;
        console.log(opcaoTexto);
    }
}