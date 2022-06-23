function star() {
    let numero1 = Number(prompt('Digite um número:'))
    let numero2 = Number(prompt('Digite outro número:'))
    let result = document.querySelector('#resultado')

    let maior = Math.max(numero1, numero2)

    if (numero1 != numero2) {
        result.innerHTML = `Analisando os valores <mark>${numero1}</mark> e  <mark>${numero2}</mark>, maior valor é <strong>${maior}</strong>`

    } else {
        result.innerHTML = `Analisando os valores <mark>${numero1}</mark> e  <mark>${numero2}</mark>, ambos são <strong>IGUAIS</strong>`
    }
}


// function star () {
//     let numero1 = Number(prompt('Digite um número:'))
//     let numero2 = Number(prompt('Digite um número:'))

//     let maior = Math.max(numero1, numero2)

//     let teste = numero1 != numero2 ? `o maior valor é  ${maior}` : `ambos são iguais`

//     document.querySelector('#resultado').innerHTML = `Analisando os valores ${numero1} e ${numero2}, <strong>${teste}<strong>`
// }
