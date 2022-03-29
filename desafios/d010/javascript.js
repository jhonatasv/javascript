function calcular() {
    let a = parseInt(prompt('Qual é o valor de a?'))
    let b = parseInt(prompt('Qual é o valor de b?'))
    let c = parseInt(prompt('Qual é o valor de c?'))


    document.querySelector('#bhaskara').innerHTML = '<h2>Resolvendo Bhaskara</h2>'
    document.querySelector('.equacao').innerHTML = `A equaçâo atual é <strong><sup>2</sup> + 6x + 2 = 0</strong>`
    document.querySelector('.calculo').innerHTML = `O cáculo realizando será <strong> &#916 = 6<sup>2</sup> - 4 . 3 . 2</strong>`
    document.querySelector('.valor').innerHTML =  `O valor calculando foi <strong><mark>&#916 = 12</mark></strong>`
}
