function carregar(){
var msg = window.document.getElementById('img')
window.document.getElementById('foto')
var data = new Date()
var hora = data.getHours()
msg.innerHTML = `agora são ${hora} horas`
}
if( hora >= 0 && hora < 12){
    Imag.src = 'manha.png'
    document.body.style.backgroundColor = '#e2cd9f'

}
    else if (hora >= 12 && hora < 18){
        Imag.src = 'tarde.png'


    }
    else{
        Imag.src = 'noite.png'


    }