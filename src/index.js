
let string = document.getElementById("cifrado");
let string2 = document.getElementById("desencriptar");
// para obtener el offset
let offset = document.getElementById("saltos");

function cifrar(){
    document.getElementById("resultado").innerHTML = window.cipher.encode(string.value, parseInt(saltos.value));
}

function desencriptar(){
    document.getElementById("resultado").innerHTML = window.cipher.decode(string.value, parseInt(saltos.value));
}