var testLink = document.getElementById("email").value;
var button = document.getElementsByClassName("button");

button.addEventListener('click', () => {
    console.log(testLink);
});