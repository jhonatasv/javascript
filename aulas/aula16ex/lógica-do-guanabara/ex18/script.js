let num = document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

let i = 0;

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inlista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inlista(num.value, valores)) {
        valores.push(Number(num.value))
        
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }

    num.value = '';
    num.focus()
    res.innerHTML = ``
}




function finalizar() {
    if(valores.length == 0 ) {
        window.alert('Adicione Valores antes de Finalizar!')
    } else {
        let tot = valores.length
        res.innerHTML = ``
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados.</p>`
    }

}