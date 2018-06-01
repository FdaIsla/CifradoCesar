/* Solución facil*/
// function encriptar(){
//   var palabra = document.getElementsByTagName("input")[0].value;
//   var palabra_codificada = btoa(palabra);
//   document.getElementById("resultado").innerHTML = palabra_codificada;
// }   

// function desencriptar(){
//   var palabra = document.getElementsByTagName("input")[0].value;
//   var palabra_codificada = atob(palabra);
//   document.getElementById("resultado").innerHTML = palabra_codificada;
// }   


window.cipher = {

  encode: (texto,numero) => {
    texto = document.getElementById('cipher').value;
    numero = 33;
    let cifradas = "";
    
    
  }

  decode: (string,offset) => {
    
    
  }
  

}



// encode: (string,offset) => {
    
//   string = document.getElementById('cipher').value;
//   offset = 33;
//   let cifradas = "";
  
//   for (let i = 0; i < string.length; i++) {
//     const formula = (string.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
//     const cifrado = String.fromCharCode(formula);
//     cifradas+= cifrado;
    
//   }
//   console.log(cifradas);
//  const contenedor = document.getElementById('containerCC').innerHTML = '<p>'+ cifradas + '</p>';
// },

// decode: (string,offset) => {
  
//   string= document.getElementById('cipher').value;
//   offset = 33;
//   let descrifradas = "";
//   for (let j = 0; j < string.length; j++) {
//     const formula = (string.toUpperCase().charCodeAt(j) + 65 - offset) % 26 + 65;
//     const cifrado = String.fromCharCode(formula);
//     descrifradas+= cifrado;
// }
// const contenedor= document.getElementById('containerCC').innerHTML = '<p>' + descrifradas + '</p>';
// }
// }