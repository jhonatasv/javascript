// btnVerificar.addEventListener('click', verificar)

// function verificar() {
//     let país = document.querySelector('#nomePaís')
//     let result = document.querySelector('.result')
//     let = valorPaís = país.value

//     result.innerHTML += `<p>Você mora no <strong>${valorPaís}</strong></p>`
  
//     if (valorPaís == 'Brasil') {
//         result.innerHTML += `Então você é <strong>Brasileiro</strong> &#x1F1E7&#x1F1F7`

//     } else {
//         result.innerHTML += `<p>Você é <strong>Estrangeiro</strong></p>`
//     }
// }

btnVerificar.addEventListener('click', function verificar() {
    let país = document.querySelector('#nomePaís')
    let result = document.querySelector('.result')
    let valorPaís = país.value

    result.innerHTML += `<p>Você mora no <strong>${valorPaís}</strong></p>` 
   
    if (país.value == 'Brasil') {
        result.innerHTML += `<p>Então você é <strong>Brasileiro</strong> &#x1F1E7&#x1F1F7</p>` 
    } else {
        result.innerHTML += `<p>Então você é <strong>Estrangeiro</strong></p>`
    }
})
