function desconto() {
    let product = prompt('Qual é o produto que você está comprando?')
    let price = Number(prompt(`Qual é o preço de ${product}?`))
    document.querySelector('#calculando').innerHTML = `<h2>Calculando desconto de 10% para ${product}</h2>`
    document.querySelector('.valor').textContent = `O preço original era R$ ${price}`
    
    let percent = 10
    let productDiscount = (price * percent) / 100
    let round_productDiscount = parseFloat(productDiscount).toFixed(2)
    document.querySelector('.desconto').textContent = `Você acaba de ganhar R$${round_productDiscount} de desconto (-10%).`
    
    let total = parseFloat(price - round_productDiscount)
    let round_Total = total.toFixed(2)  
    document.querySelector('.preco').textContent = `No fim, você vai pagar R$${round_Total} no produto ${product}.`
    
}
