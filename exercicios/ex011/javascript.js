function calcular() {
    let nome = prompt('Qual é o seu nome?')
    let nota1 = Number(prompt('Qual é a sua primeira nota?'))
    let nota2 = Number(prompt(`Além de ${nota1} qual foi a outra de ${nome}`))

   document.querySelector('#profile').innerHTML = `Calculando a média final de <mark>${nome}</mark>`
   document.querySelector('.grades').innerHTML = `As notas obtidas foram <mark>${nota1} e ${nota2}</mark>`
   document.querySelector('.average').innerHTML = `A média final será <mark>(?)</mark>`
   document.querySelector('.message').innerHTML = `A mensagem que termos é:<span class="teste">testando</span>`
}
