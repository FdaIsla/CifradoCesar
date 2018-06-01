
window.cipher = {

   encode : (textReturn, saltos) => {
    let corriendo ;
    let resultado = " ";
    for ( corriendo = 0; i < textReturn.lenhth; corriendo++){
      let x =textReturn.toUpperCase().charCodeAt(corriendo);
      let resultadoFormula = ( x - 65 + saltos) % 26 + 65;
      resultado += String.fromCharCode(resultadoFormula);
    }
    return resultado;
    }
    
  }

   



  
}

  // alert("Estamos en construcción");

