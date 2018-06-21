
// texto
let string = document.getElementById("cifrado");
let resultado = document.getElementById("resultado");
// para obtener el offset numero
let offset = document.getElementById("saltos");




function cifrar(){
    document.getElementById("resultado").innerHTML = window.cipher.encode(string.value,parseInt(saltos.value));
}

function desencriptar(){
    document.getElementById("resultado").innerHTML = window.cipher.decode(string.value,parseInt(saltos.value));
}