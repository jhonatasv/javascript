function star () {
    let numero = Number(prompt('Digite um número:'))
    let result = document.querySelector('#numero')
   
    if (numero % 2 == 0) {
        result.innerHTML = `O número ${numero} que foi digitado é <strong>PAR</strong>`
    } else {
        result.innerHTML = `O número ${numero} que foi digitado é <strong>ÍMPAR!</strong>`
    }

}
