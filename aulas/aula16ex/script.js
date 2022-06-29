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

    } else if(lista.indexOf(inputNum) == -1) {
        res.innerHTML = '';
       
        lista.push(inputNum)
        
        let i = 0

        while(i < lista.length) {
            let item = document.createElement('option')
            item.setAttribute('id', 'teste')
            item.text = `Valor ${inputNum} adicionado.`
            item.value = i
            console.log(`o i está com ${i}`)
            selectTxt.appendChild(item)
            i++
            console.log(lista)
        }
        
        
    } else {
        res.innerHTML = `<p class="msg-error">O valor já exite</p>`
       
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



// codigo de antes

// add.addEventListener('click', () => {
//     let inputNum = Number(inputTxt.value)


//     if(inputTxt.value.length === 0){ 
//         res.innerHTML = `<p class="msg-error" id="">Por favor, preencha o campo</p>`
       
//         setTimeout(()=> {
//             res.innerHTML = '';
//         }, 2000)

//     } else if(inputTxt.value > 100) {
//         res.innerHTML = `<p class="msg-error">Valor inválido, preencha o campo (entre 1 e 100)</p>`
       
//         setTimeout(() =>{
//             res.innerHTML = '';
//         }, 3000)  

//     } else if(lista ==) {
//         lista.push(inputNum)
        

       

//         let i = 0

//         while(i < lista.length) {
//             let item = document.createElement('option')
//             item.setAttribute('id', 'teste')
//             item.text = `Valor ${inputNum} adicionado.`
//             item.value = i
//             console.log(`o i está com ${i}`)
//             selectTxt.appendChild(item)
//             i++
//             console.log(lista)
//         }
        
//         // lista.forEach((num)=> {
//         //     if(num == lista) {
//         //         res.innerHTML = `Valor ${num} já adicionado`
//         //     } else {
//         //         res.innerHTML = `valor`
//         //     }
//         // })
        
       
//     }  else if(lista == lista.indexOf(inputNum)) {
//             re.innerHTML = `<p>já se encontra na lista.</p>`
//         } else if(lista.indexOf(inputNum) == -1) {

//         }


//     console.log(lista)

//     //    if(lista.indexOf(inputNum) == lista) {
//     //        res.innerHTML = `valor já adicionando`
//     //    } else {

//     //     return lista
//     //    }


//     // for(let i = 0; i < lista.length; i++) {
        
//     //     let item = document.createElement('option')
//     //     item.setAttribute('id', 'teste')
//     //     item.text = `Você add ${inputNum}`
//     //     item.value = i
//     //     selectTxt.appendChild(item)
//     //     console.log(i)
//     //     }

    
// })

