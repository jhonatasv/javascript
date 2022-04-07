 let dollarQuote = Number(prompt('Antes de mais nada, Quanto está a cotação do Dólar agora?'))

function converter() {
    let wallet = parseFloat(prompt('Quantos R$ você tem na Carteira?')).toFixed(2)
    let dollarConverter = wallet / dollarQuote
    let dollarValue = dollarConverter.toFixed(2)
    document.querySelector('#valor').innerHTML = `<p>Você tem (${wallet} R&#36) em reais. que em dolares é (${dollarValue} US&#36)</p>`
}
