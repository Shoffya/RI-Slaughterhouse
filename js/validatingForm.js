var message = document.querySelector(".message");
var messageTextarea = document.querySelector("#message");
var btn = document.querySelector("#button");

var btnSubmit = document.querySelector(".btnSubmit");
var subject = document.getElementById("subject");
var opcaoTexto = subject.options[subject.selectedIndex].text;


setInterval(() => {
    if (opcaoTexto == "Password Recovery") {
        message.style.display = "none";
        btnSubmit.href = `mailto:turpyun.rigames@gmail.com?subject=${opcaoTexto}`;

    }
    else if (opcaoTexto == "Problems with a game" || opcaoTexto == "Others") {
        // message.style.display = "flex";
        // if (messageTextarea.value == "") {
        //     alert("Preencha por favor");
        // }
        // else {
        //     btnSubmit.href = `mailto:turpyun.rigames@gmail.com?subject=${opcaoTexto}&body=${message.value}`;
        // }
        console.log(messageTextarea.value);
    }
}, 500);


