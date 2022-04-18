verificar.addEventListener('click', function verificar() {
    let valor = Number(prompt('Primeiro valor:'))
    let valor2 = Number(prompt('Segundo valor:'))
    let calculando = Number(prompt(`Valores informados ${valor} e ${valor2}. \n O que vamos fazer? \n [1] Somar \n [2] Subtrair \n [3] Multiplicar \n [4] Dividir`))
    let result = document.querySelector('#result')

    result.innerHTML = `<p><strong>Calculando...</strong></p>`
    
    switch (calculando) {
        case 1:
            result.innerHTML += `<p> ${valor} + ${valor2} = <strong>${valor + valor2}</strong></P>`
        break   

        case 2: 
            result.innerHTML += `<p>${valor} - ${valor2} = <strong>${valor - valor2}</strong></P>`
        break

        case 3:
            result.innerHTML += `<p>${valor} x ${valor2} = <strong>${valor * valor2}</strong></p>`
        break

        case 4:
            result.innerHTML += `<p>${valor} / ${valor2} = <strong>${(valor / valor2).toLocaleString()}</strong></P>`
        break
    }

})


// verificar.addEventListener('click', function verificar() {
//     let valor = Number(prompt('Primeiro valor:'))
//     let valor2 = Number(prompt('Segundo valor:'))
//     let calculando = Number(prompt(`Valores informados ${valor} e ${valor2}. \n O que vamos fazer? \n [1] Somar \n [2] Subtrair \n [3] Multiplicar \n [4] Dividir`))
//     let result = document.querySelector('#result')

//     result.innerHTML = `<p><strong>Calculando...</strong></p>`
    
//     if (calculando == 1) {
//         result.innerHTML += `<p>${valor} + ${valor2} = <strong>${valor + valor2}</strong></p>`
//     }  else if (calculando == 2) {
//         result.innerHTML += `<p>${valor} - ${valor2} = <strong>${valor - valor2}</strong></p>`
//     } else if (calculando == 3) {
//         result.innerHTML += `<p>${valor} x ${valor2} = <strong>${valor * valor2}</strong></P>`
//     } else if (calculando == 4) {
//         result.innerHTML += `<p>${valor} / ${valor2} = <strong>${(valor/valor2).toLocaleString('pt-BR')}</strong></P>`
//     } 

// })
