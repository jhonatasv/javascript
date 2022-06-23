let max = 100
let numeroSecreto =  Math.floor((Math.random() * max) + 1)

btn.addEventListener('click', function verificar() {
    let result = document.querySelector('#result')
    let palpite = Number(prompt('Qual é o seu palpite?'))

    if(numeroSecreto > palpite) {
        result.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MAIOR</strong></p>`
    } else if (palpite > numeroSecreto) {
        result.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MENOR</strong></p>`
    } else if (palpite == numeroSecreto){
        result.innerHTML += `<p><strong>PARABÉNS</strong>, Você acertou, Eu tinha sorteado o valor <strong>${numeroSecreto}<strong>!</p>`
        document.querySelector('#btn').style.visibility = 'hidden'
        result.innerHTML += `<p>A pagina vai reiniciar após 6 segundos</p>`
        setTimeout(function() {
            window.location.reload()
        }, 6000); // A pagina vai reiniciar após 6 segundos
          
    }
    
})



/*
btn.addEventListener('click', verificar)

let max = 100
let numeroSecreto = Math.floor((Math.random() * max) + 1)

function verificar() {
    let result = document.querySelector('#result')
    let palpite = Number(prompt('Qual é o seu palpite?'))

    console.log(numeroSecreto)
    
    if(numeroSecreto > palpite) {
        result.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MAIOR</strong> (<mark>${numeroSecreto}</mark>)</p>`
    } else if (palpite > numeroSecreto) {
        result.innerHTML += `Você falou ${palpite}. Meu número é <strong>MENOR</strong> (<mark>${numeroSecreto}</mark>)</p>`
    } else if (palpite == numeroSecreto){
        result.innerHTML += `<p><strong>PARABÉNS</strong>, Você acertou ${palpite}, Eu tinha sorteado o valor <strong>${numeroSecreto}<strong>!</p>`
        btn.style.visibility = 'hidden'
    } 
}
*/
