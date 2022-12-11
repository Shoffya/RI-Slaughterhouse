let btn = document.querySelector("#recovery");
const valid = new RegExp("[a-zA-z]+[0-9]*.@(hotmail|gmail).com")

btn.addEventListener('click', () => {
    var email = document.getElementById("formEmail").elements.namedItem("email").value;

    if (valid.test(email)) {
        $.ajax({
            method: 'POST',
            url: 'https://formsubmit.co/ajax/' + email,
            dataType: 'json',
            accepts: 'application/json',
            data: {
                name: "Password recovery",
                message: "Hello! Your new password is test"
            },
            success: (data) => console.log(data),
            error: (err) => console.log(err)
        });
    }
});