var message = document.querySelector(".message");
var messageTextarea = document.querySelector("#message");
var btn = document.querySelector("#button");

var btnSubmit = document.querySelector(".btnSubmit");
var subject = document.getElementById("subject");
var opcaoTexto = subject.options[subject.selectedIndex].text;


setInterval(() => {
    if (opcaoTexto == "Password Recovery") {
        console.log(opcaoTexto);
    }
    else if (opcaoTexto == "Problems with a game") {
        console.log(opcaoTexto);
    }
    else if (opcaoTexto == "Others") {
        console.log(opcaoTexto);
    }
}, 500);


