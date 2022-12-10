var email = document.querySelector("#email");
var testEmail = email.value;
var button = document.querySelector(".button");

button.addEventListener('click', () => {
    console.log(testEmail);
});