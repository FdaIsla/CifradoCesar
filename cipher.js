window.cipher = {
  
  encode: (offset, string) => { /* codificar:() "=>"arrow function   */
    /* Acá va tu código */
  
    function encriptar(elemento){
    var palabra = document.getElementsByTagName("input")[0].value;
    var palabra_codificada = btoa(palabra);
    document.getElementById("resultado").innerHTML = palabra_codificada;
  }


  function desencriptar (elemento){

  }  
  
  
  },
  decode: (offset, string) => {
    /* Acá va tu código */
  }
}