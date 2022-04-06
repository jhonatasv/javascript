// function soma() {
//     let number1 = document.querySelector('#numero1')
//     let number2 = document.querySelector('#numero2')
//     let res = document.querySelector('.resultado')

//     let valor1 = Number(number1.value)
//     let valor2 = Number(number2.value)
    
//     let soma = valor1 + valor2
//     res.innerHTML = `${soma}`
// }

function soma() {
    let number1 = document.querySelector('#numero1')
    let number2 = document.querySelector('#numero2')
    let total = document.querySelector('.resultado')
  
    let valor1 = Number(number1.value)
    let valor2 = Number(number2.value)

    let somar = valor1 + valor2
    total.innerHTML = `A soma entre ${valor1} e ${valor2} é igual a <strong>${somar}</strong>`
}

