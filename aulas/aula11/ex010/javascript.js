calcular.addEventListener('click', verificacao)

function verificacao() {
    let velocidade = document.querySelector('#valorKm')
    let paragrafo = document.querySelector('.resultado')
    let convecao = Number(velocidade.value)
   
    paragrafo.innerHTML += `<p>sua velociade é de <strong>${convecao} Km/h<strong></p>`
    if (convecao > 60){
        paragrafo.innerHTML += 'Você ultrapassou o limite Permtivo, você foi <strong>Multado!</strong>'
    }
    paragrafo.innerHTML += `<P>Dirija sempre com segurança<p>`
    
}

// calcular.addEventListener('click', verificacao)

// calcular.addEventListener('click', function verificacao() {
//     let speed = document.querySelector('#valorKm')
//     let paragraph = document.querySelector('.resultado')
    
//     let conventionFornumber = Number(speed.value)
   
//     if (conventionFornumber > 60){
//         paragraph.innerText = 'Você ultrapassou o limite Permtivo, Multado!'
//     } else {
//         paragraph.innerText = "Não fez mais que a sua obrigação"
//     }

// })

