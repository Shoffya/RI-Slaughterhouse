var message = document.querySelector(".message");
var messageTextarea = document.querySelector("#message");
var btn = document.querySelector("#button");

var btnSubmit = document.querySelector(".btnSubmit");
var subject = document.getElementById("subject");
var opcaoTexto = subject.options[subject.selectedIndex].text;


setInterval(() => {
    for (var i = 0; i < subject.options.length; i++) {
        if (subject.options[i].text === "Password Recovery") {
            subject.selectedIndex = i;
            console.log(subject.options[i].text);
            break;
        }
        else if (subject.options[i].text === "Problems with a game") {
            subject.selectedIndex = i;
            console.log(subject.options[i].text);
            break;
        }
        else if (subject.options[i].text === "Others") {
            subject.selectedIndex = i;
            console.log(subject.options[i].text);
            break;
        }
    }
    // if (opcaoTexto == "Password Recovery") {
    //     console.log(opcaoTexto);
    // }
    // else if (opcaoTexto == "Problems with a game") {
    //     console.log(opcaoTexto);
    // }
    // else if (opcaoTexto == "Others") {
    //     console.log(opcaoTexto);
    // }
}, 500);


