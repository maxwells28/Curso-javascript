
function calcular(){
    var tabuada = parseInt(document.getElementById('valor').value)
    var resultado = document.getElementById('res')

    resultado.innerHTML = ''
    
    if(!isNaN(tabuada)){   
    
       for(var t = 1; t <= 10; t++){
          var multiplicação = tabuada * t
          resultado.innerHTML += tabuada + " x " + t + " = " + multiplicação + '<br>'
        }

    }else{
        resultado.innerHTML = 'Por favor, difite um numero valido'
    } 

    
}
document.getElementById('botaovalor').addEventListener('click', calcular)



    
