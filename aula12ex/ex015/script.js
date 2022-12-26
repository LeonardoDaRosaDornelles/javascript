function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.lenght == 0 || fano.value > ano){
        window.alert('algo deu errado')
    } else{
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            gênero = 'homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','bebehomem.png')
            }else if(idade < 21 ){
                //jovem
                img.setAttribute('src','jovemhomem.png')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src','adulto.png')
            }else{
                //velho
                img.setAttribute('src','velho.png')
            }
        }else if(fsex[1].checked){
            gênero = 'mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src','bebemulher.png')
            }else if(idade < 21 ){
                //jovem
                img.setAttribute('src','jovemmulher.png')
            }else if(idade < 50){
                //adulta
                img.setAttribute('src','adulta.png')
            }else{
                //velha
                img.setAttribute('src','velha.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${gênero} com idade de ${idade} anos`
        res.appendChild(img)
    }
}