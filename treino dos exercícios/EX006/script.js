function calcular(){
    var num = document.getElementById('num')
    if (num.value.length == 0){
        window.alert('Digite um número!')
    }else{
        var tab = document.getElementById('tab')
        var n = Number(num.value)
        var c = 1
        tab.innerHTML = ''
        while (c <= 10){
            var opt = document.createElement('option')
            opt.innerText = `${n} x ${c} = ${c*n}` 
            tab.appendChild(opt)
            c++
        }
    }
}