window.actions = {
    execute: ()=> {
    let saltos = document.getElementById("number").value;
    let textReturn = document.getElementById("cifrado").value;
      
    if(saltos == true){
        document.getElementById("cifrado").value = cipher.encode (textReturn,saltos);
        
    } else {
        alert("usted no a llenado el campo");
    }
    


}
}