btn.addEventListener('click', verificar)

function verificar() {
    let previousPrice = Number(prompt('Qual era o preço anterior do produto?'))
    let currentPrice = Number(prompt('Qual é o preço atual do produto?'))
    let printOut = document.querySelector('#result')

    let precoAntes = previousPrice.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let precoAgora = currentPrice.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let aumentoPreco = (currentPrice - previousPrice).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    let diminuirPreco = (previousPrice - currentPrice).toLocaleString('pr-BR', {style: 'currency', currency: 'BRL'})
    let variacaoAlta = (currentPrice / previousPrice- 1) * 100
    let variacaoBaixa = (previousPrice / currentPrice - 1) * 100


    printOut.innerHTML = `<h2>Analisando os Valores informados</h2>`
    printOut.innerHTML += `<p>O produto custava ${precoAntes} e agora custa ${precoAgora}</p>`
    
    if(previousPrice < currentPrice) {
        printOut.innerHTML += `<p>Hoje o produto está mais caro.</p>`
        printOut.innerHTML += `<p>O preço subiu <strong>${aumentoPreco}</strong> em relação ao preço anterior.</p>`
       printOut.innerHTML +=  `Uma variação de ${variacaoAlta.toFixed(1)}% pra cima.`
    } else if (previousPrice > currentPrice) {
        printOut.innerHTML += '<p>Hoje o produto está mais barato.</p>'
        printOut.innerHTML += `<p>O preço caiu <strong>${diminuirPreco}</strong> em relação ao preço anterior.</p>`
        printOut.innerHTML += `<p>Uma variação de ${variacaoBaixa.toFixed(2)}% pra baixo.</p>`
    } else {
        printOut.innerHTML += `<p>Não houve variação de preços</p>`
    }

}
