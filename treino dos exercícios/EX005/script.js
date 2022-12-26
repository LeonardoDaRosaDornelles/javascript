function clicar(){
    var txti = document.getElementById('txti')  
    var txtf = document.getElementById('txtf') 
    var txtp = document.getElementById('txtp')
    if (txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        window.alert('digite em todos os campos!')
    }else{
        var i = Number(txti.value)
        var f = Number(txtf.value)
        var p = Number(txtp.value)
        
        if(p == 0){
            window.alert (`Número invalido!! considerando PASSO = 1`)
            p = 1 
        }

        for (var c = i; c <= f; c += p){
            res.innerText += `${c} \u{1f449}` 
        }

        if(i >= f){
            for (var c = i; c >= f; c -= p){
                res.innerText += `${c} \u{1f449}` 
            }
        }
    }
}