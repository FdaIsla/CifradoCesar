
window.cipher = {

   encode : (string,offset) => {
    let cifradas= "";
   
          for (let i = 0; i <string.length; i++) {
          let formula = (string.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
     
          if (string.charCodeAt(i) === 26) {
          formula = ' ';
          cifradas+= " ";
          
          }
          const cifrado = String.fromCharCode(formula);
          cifradas+= cifrado;
          }
          return cifradas;
    
          },
    
    decode : (resultado,offset) => {
      let descrifradas= "";
     
          for (let x = 0; x <resultado.length; x++) {
          let formula = (resultado.toUpperCase().charCodeAt(x) + 65 - offset) % 26 + 65;
        
          if (resultado.charCodeAt(x) === 26) {
          formula = ' ';// contiene los espacios
          cifradas+= " ";// pone en la frase los espacios
         
          }
          const decifrado = String.fromCharCode(formula);
          descrifradas+= decifrado;
          

          }
          return descrifradas;
     

}
}