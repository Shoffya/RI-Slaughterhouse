let btn = document.querySelector("#message");

function validatingForm() {
    var message = document.getElementById("formEmail").elements.namedItem("message").value;
    var select = document.getElementById("Support");
    var opcaoTexto = select.options[select.selectedIndex].text;
    var opcaoValor = select.options[select.selectedIndex].value;

    console.log(opcaoTexto); // Ferrari
    console.log(opcaoValor); // ferrari
}

btn.addEventListener('click', () => {
    validatingForm();
});