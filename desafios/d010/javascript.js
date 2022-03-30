function calcular() {
    let a = parseInt(prompt('Qual é o valor de a?'))
    let b = parseInt(prompt('Qual é o valor de b?'))
    let c = parseInt(prompt('Qual é o valor de c?'))

    
    let delta =  Math.pow(b,2) - (4 * a * c)
    // outro metodo para calcular o valor de delta (b * b) - 4 * a * c
    

    //primeira raiz
    let raiz_1 =  (-b + Math.sqrt(delta)) / (2 * a)
    document.querySelector('.raiz_1').textContent = `Primeira raiz ${raiz_1}`
  

    //segunda raiz
    let raiz_2 = (-b - Math.sqrt(delta)) / (2 * a) 
    document.querySelector('.raiz_2').textContent = `Segunda Raiz ${raiz_2}`

    document.querySelector('#bhaskara').innerHTML = '<h2>Resolvendo Bhaskara</h2>'
    document.querySelector('.equacao').innerHTML = `A equaçâo atual é <strong>${a}x<sup>2</sup> + ${b}x + ${c} = 0</strong>`
    document.querySelector('.calculo').innerHTML = `O cáculo realizando será <strong> &#916 = 6<sup>2</sup> - 4 . 3 . 2</strong>`
    document.querySelector('.valor').innerHTML =  `O valor calculando foi <strong><mark>&#916 = ${delta}</mark></strong>`
  
}
