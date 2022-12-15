var subject = document.getElementById("#subject");

setInterval(() => {
    if (subject.value == "Password Recovery") {
        console.log(subject.text);
    }
    else if (subject.value == "Problems with a game") {
        console.log(subject.text);
    }
    else if (subject.value == "Others") {
        console.log(subject.text);
    }
}, 500);


