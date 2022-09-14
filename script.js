
(function () {

    function entrar (e) {
        e.preventDefault();

        const { login, senha } = e.target;
    
        if (login.value === "adm" && senha.value == "adm") {
            alert("Sucesso!");

            return e.target.reset();
        }

        alert("Senha incorreta! por favor digite novamente!");
    }
    
    document.getElementById('loginForm').addEventListener('submit', entrar, false);

})();
