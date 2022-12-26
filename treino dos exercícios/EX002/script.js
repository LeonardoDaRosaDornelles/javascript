function carregar(){
    var agora = new Date()
    var hora = 19
    var res = document.getElementById('res')
    if (hora >= 6 && hora <= 12){
        res.innerHTML = `Agora são ${hora} horas`
    }else if (hora <= 17){
        res.innerHTML = `Agora são ${hora} horas da tarde`
        document.body.style.background = 'gray'
        var imagens = document.getElementById('imagem')
        imagens.src = 'fototarde.png'
    }else{
        res.innerHTML = `Agora são ${hora} horas da noite`
        var imagens = document.getElementById('imagem')
        imagens.src = 'fotonoite.png'
        document.body.style.background = 'purple'
    }
}