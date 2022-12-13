function validatingForm() {
    // var message = document.getElementById("formEmail").elements.namedItem("message").value;
    var message = document.querySelector(".message");
    var btnSubmit = document.querySelector(".btnSubmit");
    var selectSubject = document.getElementById("subject");
    var opcaoTexto = selectSubject.options[select.selectedIndex].text;

    if (opcaoTexto == "Password Recovery") {
        // btnSubmit.href = `mailto:turpyun.rigames@gmail.com?subject=${opcaoTexto}`;
        console.log(opcaoTexto);
    }
}