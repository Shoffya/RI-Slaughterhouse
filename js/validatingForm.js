let btn = document.querySelector("#button");

// function validatingForm() {

// }

btn.addEventListener('click', () => {
    var message = document.getElementById("formEmail").elements.namedItem("message").value;
    var select = document.getElementById("Support");
    var opcaoTexto = select.options[select.selectedIndex].text;
    var opcaoValor = select.options[select.selectedIndex].value;

    console.log(opcaoTexto);
    console.log(opcaoValor);
});