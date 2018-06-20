window.actions = {
    // execute: ()=> {
    let saltos = document.getElementById("saltos");
    // let botonCifrar = document.getElementById("btnCifrar").value;
    let textbox = document.getElementById("cifrado");
      
    document.getElementById("btnCifrar").addEventListener(click, function() {
        document.getElementById("cifrado").innerHTML=window.cipher(string.value, parseInt(saltos.value));

    };
    
 
 
}
