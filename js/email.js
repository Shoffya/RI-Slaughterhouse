const email = document.getElementById("email");
const button = document.getElementById("button");

button.addEventListener('click', () => {
    // "mailto:turpyun.rigames@gmail.com?subject=Password Recovery 🕵🏼‍♂️&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=Conteúdo do email que será preenchido automaticamente"

    window.open("mailto:email@provedor.com.br?subject=Assunto do email&cc=copia@provedor.com.br&bcc=copiaoculta@provedor.com.br&body=Conteúdo do email que será preenchido automaticamente.value");
});