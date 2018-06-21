
window.cipher = {

   encode : (string, offset) => {
    let cifradas= "";
   
   for(let i = 0; i < string.length; i++) {
     let formula = (string.toUpperCase().charCodeAt(i) - 65 + offset) % 26 + 65;
     if (string.charCodeAt(i) === 32) {
       formula = ' ';// contiene los espacios
       cifradas+= " ";// pone en la frase los espacios
       
     }
     const cifrado = String.fromCharCode(formula);
     cifradas+= cifrado;
   }
   return cifradas;
    
    },
    
    decode : (string, offset) => {
      let decifrados= "";
     
     for(let i = 0; i < string.length; i++) {
       let formula = (string.toUpperCase().charCodeAt(i) + 65 - offset) % 26 + 65;
       if (string.charCodeAt(i) === 32) {
         formula = ' ';// contiene los espacios
         decifrados+= " ";// pone en la frase los espacios
        
       }
       const desencriptar = String.fromCharCode(formula);
       decifrados+= desencriptar;
     }
     return decifrados;
  

}
}