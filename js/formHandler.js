let btn = document.querySelector("#recovery");
const valid = new RegExp("[a-zA-z]+[0-9]*.@(hotmail|gmail).com")

btn.addEventListener('click', () => {
    var email = document.getElementById("formEmail").elements.namedItem("email").value;
    var message = document.getElementById("formEmail").elements.namedItem("email").value;

    if (valid.test(email)) {
    }
});