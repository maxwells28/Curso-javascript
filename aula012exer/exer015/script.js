function verificar(){
var data =  new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if(fano.value.length == 0 || fano.value > ano){
    window.alert('ERRO, verifique os dados digitados e tente novamente!')
}
else{
    var fsex = document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var img = document.getElementById('will')
    //var img = document.createElement('img')
    //img.setAttribute('id','foto' )
    if (fsex[0].checked){
        genero = 'Transgênero'
        if(idade >= 0 && idade < 21){
            img.setAttribute('src', 'viado.jpeg')
        }
        else if (idade < 22){
            img.setAttribute('src', '')

        }
        else if (idade < 50){
           
            img.setAttribute('src', 'viado.jpeg')
            innerHTML = '1. Transgênero · 2. Cisgênero · 3. Não-binário'

        }
        else{
            img.setAttribute('src', 'idoso.png')


        }
    }
    else if (fsex[1].checked){
       genero = 'mulher'
       if(idade >= 0 && idade < 21){
    }
    else if (idade < 22){

    }
    else if (idade < 50){

    }
    else{
        
    }
    }

}
//res.innerHTML = ('Detectamos um 1. Transgênero · 2. Cisgênero · 3. Não-binário')
res.innerHTML = `Detectamos Transgênero  Cisgênero  Não-binário com ${idade} anos chamado Wilblener`
//res.appendChild(img)


}



