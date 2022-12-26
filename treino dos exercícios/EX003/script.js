function verificar(){
    var agora = new Date()
    var ano = agora.getFullYear()
    var txtano = document.getElementById('txtano')
    var fsex = document.getElementsByName('sexo')
    var genero = ''
    var imagem = document.createElement('img')
    if (txtano.value.lenght == 0 && idade > ano){
        res.innerHTML = 'algo deu errado, tente novamente'
    }else{   
        var fsex = document.getElementsByName('sexo')
        var genero = ''
        var imagem = document.createElement('img')
        var idade = ano - txtano.value
        if (fsex[0].checked){
            genero = 'homem'
            res.style.textAlign = 'center'
            if (idade >= 0 && idade < 12){
                imagem.setAttribute('src','bebehomem.png')
                res.innerHTML = `detectamos uma criança de ${idade} anos`
            }else if(idade < 21){
                imagem.setAttribute('src','jovemhomem.png')
                res.innerHTML = `detectamos um jovem de ${idade} anos`
            }else if(idade < 50){
                imagem.setAttribute('src','adulto.png')
                res.innerHTML = `detectamos um adulto de ${idade} anos`
            }else{
                imagem.setAttribute('src','velho.png')
                res.innerHTML = `detectamos um idoso de ${idade} anos`
            }
        }else if (fsex[1].checked){
            genero = 'mulher'
            res.style.textAlign = 'center'
            if (idade >= 0 && idade < 12){
                imagem.setAttribute('src','bebemulher.png')
                res.innerHTML = `detectamos uma criança de ${idade} anos`
            }else if(idade < 21){
                imagem.setAttribute('src','jovemmulher.png')
                res.innerHTML = `detectamos um jovem de ${idade} anos`
            }else if(idade < 50){
                imagem.setAttribute('src','adulta.png')
                res.innerHTML = `detectamos um adulto de ${idade} anos`
            }else{
                imagem.setAttribute('src','velha.png')
                res.innerHTML = `detectamos um idoso de ${idade} anos`
            }
        }
        
        res.appendChild(imagem)
    }
}