function entrar(){
    let login = document.getElementById("login").value;
    let senha = document.getElementById("senha").value;

    if (login =="adm"  && senha =="adm"){
        alert("Sucesso!");
    }else{
        alert("senha incorreta! por favor digite novamente!");
    }
}