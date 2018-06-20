
window.cipher = {

   encode : (textbox, saltos) => {
    let corriendo;
    let resultado = " ";
    for ( corriendo = 0; i < textbox.lenhth; corriendo++){
      let x =textbox.toUpperCase().charCodeAt(corriendo);
      let resultadoFormula = ( x - 65 + saltos) % 26 + 65;
      resultado += String.fromCharCode(resultadoFormula);
    }
    return resultado;
    },
    
  //   decode : (textbox, saltos) => {
  //     let corriendo;
  //     let resultado = " ";
  //     for ( corriendo = 0; i < textReturn.lenhth; corriendo++){
  //       let x =textReturn.toUpperCase().charCodeAt(corriendo);
  //       let resultadoFormula = ( x - 65 - saltos) % 26 + 65;
  //       resultado += String.fromCharCode(resultadoFormula);
  //     }
  //     return resultado;
  // }
  // alert("Estamos en construcción");

}