let inputTxt = document.querySelector('#nutxt') 
let add = document.querySelector('#adicionar')
let selectTxt = document.querySelector('#selnm')
let finalizar = document.querySelector('#finalizar')
let res = document.querySelector('#res')

let lista = []

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

    } else {
        let i = 0

        while(i < lista.length) {
            let item = document.createElement('option')
            item.setAttribute('id', 'teste')
            item.text = `Você add ${inputNum}`
            item.value = i
            selectTxt.appendChild(item)
            lista.push(inputNum)
            console.log(i)
            i++
        }

    }

    
    console.log(lista)

    //    if(lista.indexOf(inputNum) == lista) {
    //        res.innerHTML = `valor já adicionando`
    //    } else {

    //     return lista
    //    }


// for(let i = 0; i < lista.length; i++) {
    
//     let item = document.createElement('option')
//     item.setAttribute('id', 'teste')
//     item.text = `Você add ${inputNum}`
//     item.value = i
//     selectTxt.appendChild(item)
//     console.log(i)
//     }

    
})

/*

finalizar.addEventListener('click', () => {
    
    for(let i = 0; i < lista.length; i++) {

        const item = document.createElement('option')
       // novoOption.setAttribute('id', 'teste')
        item.value = `Você add ${lista}`
        selectTxt.appendChild(item)
    }

   selectTxt.innerHTML = `Valor ${lista} adicionado` 
   console.log(selectTxt)
    res.innerHTML = `<p>${lista}</p>`

})
*/