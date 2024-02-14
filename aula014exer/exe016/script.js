document.getElementById('botao').addEventListener('click', contar)

function contar(){
    var inicio = parseInt(document.getElementById('valor1').value)
    var fim = parseInt(document.getElementById('valor2').value)
    var passo = parseInt(document.getElementById('valor3').value)
    var res = parseInt(document.getElementById('resultado').value)

    if(isNaN(inicio) || isNaN(fim) || isNaN(passo)){
        resultado.innerHTML = "Por favor, insira números válidos."
        return
    }
    

    if(inicio >= fim){
        alert('O valor inicial deve ser menor do que o valor final!')
        return
    }

    resultado.innerHTML = ""
    
    
    for(var i = inicio; i <= fim; i += passo){
        resultado.innerHTML += i + ", "
        
        
    }
}