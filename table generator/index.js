function table(){

    let number =document.getElementById("num").value;
    let results ="";
    for( let i=1; i<=10; i++){
        results += `${number} x ${i} = ${number * i} <br>`;
    } 
    
    
    document.getElementById("res").innerHTML = results;
    
    
    }