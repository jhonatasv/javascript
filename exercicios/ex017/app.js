add.addEventListener('click', adicionar)
clear.addEventListener('click', limpar)

function adicionar() {
    let result = document.querySelector('#result')
    let max = 100
    let aleatorio = Math.floor((Math.random() * max) + 1)

    result.innerHTML += `<p>Acabei de pensar no número <mark>${aleatorio}</mark>!</p>`
}

function limpar() {
    result.innerHTML = null
}

// function adicionar() {
//     let result = document.querySelector('#result')

//     let max = 100 
//     let aleatorio = Math.random() * max + 1
//     let total = Math.floor(aleatorio)


//     result.innerHTML += `<p>Acabei de pensar no número <mark>${total}</mark>!</p>`
// }

// function limpar() {
//     result.innerHTML = null
// }
