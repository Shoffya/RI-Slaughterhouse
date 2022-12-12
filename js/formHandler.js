let btn = document.querySelector("#message");
const valid = new RegExp("[a-zA-z]+[0-9]*.@(hotmail|gmail).com")

btn.addEventListener('click', () => {
    var message = document.getElementById("formEmail").elements.namedItem("message").value;

    if (valid.test(email)) {
    }
});