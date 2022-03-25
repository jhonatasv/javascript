function desconto() {
    let product = prompt('Qual é o produto que você está comprando?')
    let price = Number(prompt(`Qual é o preço de ${product}?`))
    // let productDiscount = price
    document.querySelector('#calculando').innerHTML = `<h2>Calculando desconto de 10% para ${product}</h2>`
    document.querySelector('.valor').textContent = `O preço original era R$ ${price}.`
    document.querySelector('.desconto').textContent = `Você acaba de ganhar R$() de desconto (-10%).`
    document.querySelector('.preco').textContent = `No fim, você vai pagar R$() no produto ${product}.`

}