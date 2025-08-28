const email = "admin@email.com";
const senha = "admin";

function verificarLogin() {
    const emailInformado = document.getElementById("email").value;
    const senhaInformada = document.getElementById("senha").value;

    if (emailInformado === email) {
        alert("E-mail informado corretamente!");
        if (senhaInformada === senha) {
            alert("Senha informada corretamente!");
            window.location = "home.html";
        } else
            alert("Senha incorreta!");
    } else
        alert("E-mail incorreto!");
}
