let inputTxt = document.querySelector('#nutxt') 
let add = document.querySelector('#adicionar')
let selectTxt = document.querySelector('#selnm')
let finalizar = document.querySelector('#finalizar')
let res = document.querySelector('#res')

let lista = []
let contador = 0

contador
add.addEventListener('click', () => {
    let inputNum = Number(inputTxt.value)


    if(inputTxt.value.length === 0){ 
        res.innerHTML = `<p class="msg-error" id="">Por favor, preencha o campo</p>`
       
        setTimeout(()=> {
            res.innerHTML = '';
        }, 2000)
        

    } else if(inputTxt.value > 100) {
        res.innerHTML = `<p class="msg-error">Valor inválido, preencha o campo (entre 1 e 100)</p>`
       
        setTimeout(() =>{
            res.innerHTML = '';
        }, 3000)  

    } else if(lista.indexOf(inputNum) == -1) {
        res.innerHTML = '';
        inputTxt.value = '';
       
        
        lista.push(inputNum)
       

        do {
            let item = document.createElement('option')
            item.setAttribute('class', 'itens')
            item.text = `Valor ${inputNum} adicionado.`
            item.value = contador
            selectTxt.appendChild(item)
            contador++
            
        } while(contador < lista.length)
        
        
    } else {
        res.innerHTML = `<p class="msg-error">O valor já exite.</p>`
       
        setTimeout(()=> {
            res.innerHTML = '';
        }, 3000)
    }
    

})


finalizar.addEventListener('click', () => {
    let tamanho = lista.length
    let maiorValor = Math.max(...lista)
    let menorValor = Math.min(...lista) // (...spred) operator
    let somandoTodos = lista.reduce((total, acc) => {
        return acc + total
    }, 0)
    let mediaValores =  somandoTodos / tamanho;

    res.innerHTML = `<p>Ao todo, temos ${tamanho} números cadastrado.</p>`
    res.innerHTML += `<p>O maior valor infomado foi ${maiorValor}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menorValor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${somandoTodos}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${mediaValores}.</p>`
})

