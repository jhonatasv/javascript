function star () {
    let numero1 = Number(prompt('Digite um número:'))
    let numero2 = Number(prompt('Digite um número:'))
    
   let maior = Math.max(numero1, numero2)
   let menor = Math.min(numero1, numero2)


    let teste = numero1 >= numero2 == menor ? `ambos são iguais` : `o maior valor é  ${maior}`

    
    document.querySelector('#numero').innerHTML = `Analisando os valores ${numero1} e ${numero2}, <strong>${teste}<strong>`
}