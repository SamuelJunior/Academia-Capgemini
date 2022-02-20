function questao2() {
  var senha = document.getElementById("senha").value;

  var aux = " ";

  saida = 0

    if (senha.length >= 6) {

        if (!senha.match(/[a-z]+/)) {
            saida= saida+1
            aux = " Faltam letras minúsculas<br/>"
            }
    
            if (!senha.match(/[A-Z]+/)) {
                saida= saida+1
                aux = aux + " Faltam letras maiúsculas<br/>"
            }
    
            if (!senha.match(/[0-9]/)) {
                saida= saida+1
                aux = aux + " Faltam números<br/>"
            }
    
            if (!senha.match(/[!|@|#|$|%|^|&|*|(|)|-|+]/)) {
                saida= saida+1
                aux = aux + " Faltam caracteres especiais <br/>"
            }
        
        }else{
            saida = 6-senha.length
        }

   if(saida>0){

    res2.innerHTML = ` Saída: Faltam ${saida} caracteres  <br/> ${aux}`;

   }else{
    res2.innerHTML ="Senha forte"
   }     

  
}
