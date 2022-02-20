function questao3(){

        var palavra = document.getElementById('palavra').value
        var pares = 0;
        var subStrings = {};
      
        //find all substrings of our string, count them in a hash
        for(var i = 0; i < palavra.length; i++){
            for(var j = i; j < palavra.length; j++){
                let tempSubString = palavra.substring(i, j+1).split("").sort().join("");
                if(subStrings[tempSubString]){
                    subStrings[tempSubString] +=1;
                }else{
                    subStrings[tempSubString] = 1;
                }
            }
        }
       
        //count the pairs of substrings
        for(var keys in subStrings){
            if(subStrings[keys] > 1){
            let temp = (subStrings[keys])*(subStrings[keys]-1)/2;
               pares += temp;
           }
        }
        res3.innerHTML = `Saída: <br/><br/> ${pares}`
    
}