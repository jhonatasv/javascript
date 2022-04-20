function calcular() {
    let nome = prompt('Qual é o seu nome?')
    let nota1 = Number(prompt('Qual é a sua primeira nota?'))
    let nota2 = Number(prompt(`Além de ${nota1} qual foi a outra de ${nome}`))
    let result = document.querySelector('#profile')

    let media = (nota1 + nota2) / 2
    
    result.innerHTML = `<p>Calculando a média final de <mark>${nome}</mark></p>`
    result.innerHTML += `<p>As notas obtidas foram <mark>${nota1} e ${nota2}</mark></p>`
    result.innerHTML += `<p>A média final será <mark>${media}</mark></p>`
   
    if (media >= 6) {
        result.innerHTML += `<p>A mensagem que termos é: <span class="resultado">Meus Parabéns!</span></p>`
    } else {
        result.innerHTML += `<p>A mensagem que termos é: <span class="resultado">Estude um pouco mais</span></p>`
    }
}

// function calcular() {
//     let nome = prompt('Qual é o seu nome?')
//     let nota1 = Number(prompt('Qual é a sua primeira nota?'))
//     let nota2 = Number(prompt(`Além de ${nota1} qual foi a outra de ${nome}`))
    
//     let media = (nota1 + nota2) / 2
//     let resultado = media >= 6 ? 'Meus Parabéns!' : 'Estude um pouco mais!'

//    document.querySelector('#profile').innerHTML = `Calculando a média final de <mark>${nome}</mark>`
//    document.querySelector('.grades').innerHTML = `As notas obtidas foram <mark>${nota1} e ${nota2}</mark>`
//    document.querySelector('.average').innerHTML = `A média final será <mark>${media}</mark>`
//    document.querySelector('.message').innerHTML = `A mensagem que termos é: <span class="resultado">${resultado}</span>`
 
// }