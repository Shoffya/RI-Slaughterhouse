var message = document.querySelector(".message");
var messageTextarea = document.querySelector("#message").required;

function validatingForm() {
    var btnSubmit = document.querySelector(".btnSubmit");
    var subject = document.getElementById("subject");
    var opcaoTexto = subject.options[subject.selectedIndex].text;

    if (opcaoTexto == "Password Recovery") {
        message.style.display = "none";
        btnSubmit.href = `mailto:turpyun.rigames@gmail.com?subject=${opcaoTexto}`;
    }
    else if (opcaoTexto == "Problems with a game") {
        message.style.display = "flex";
        btnSubmit.href = `mailto:turpyun.rigames@gmail.com?subject=${opcaoTexto}`;
    }
    else {
        message.style.display = "flex";
    }
}

// function messageForm() {
//     if (message.style.display == "flex") {
//         message.required;
//         if(messageTextarea.value == null){
            
//         }
//     }
// }