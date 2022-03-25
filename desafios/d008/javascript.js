function desconto() {
    let product = prompt('Qual é o produto que você está comprando?')
    let price = Number(prompt(`Qual é o preço de ${product}?`))
    let productDiscount = price
    document.querySelector('#desconto').innerHTML = `<h2>Calculando desconto de 10% para ${product}</h2>`

}