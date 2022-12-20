function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 19
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //bom dia
        document.body.style.background = 'rgb(193, 195, 199)'
        img.src = "imagens/manha.png"
    } else if (hora >= 12 && hora < 18) {
        // boa tarde
        document.body.style.background = 'rgb(188, 110, 54)'
        img.src = "imagens/tarde.png"
    } else {
        //Boa noite
        document.body.style.background = 'rgb(154, 126, 184)'
        img.src = "imagens/noite.png"
    }
}