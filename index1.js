function questao1(){

    var tamEscada = document.getElementById('escada')
    var aux = " "

    tamEscada = Number(tamEscada.value)

    for (let i = 0; i < tamEscada; i++) {
        for (let j = 0; j < tamEscada; j++) {
            if(j > (tamEscada-2-i)){
                aux = aux+"*"
            }else{
                aux = aux+"&nbsp&nbsp"
            }
        }   
        aux = aux+("<br/>"); 
    } 
        
 res1.innerHTML = `Saída: <br/> ${aux}`
       
    
}
