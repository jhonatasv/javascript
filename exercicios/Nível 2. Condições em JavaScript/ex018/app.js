btn.addEventListener('click', function verificar() {
    let result = document.querySelector('#result')
    let palpite = Number(prompt('Qual é o seu palpite?'))

    let max = 5
    let numeroSecreto = Math.floor((Math.random() * max) + 1)
    
    if(numeroSecreto > palpite) {
        result.innerHTML += `<p>Você falou ${palpite}. Meu número é <strong>MAIOR</strong> (<mark>${numeroSecreto}</mark>)</p>`
       // palpite = prompt('Qual é o seu palpite2?')
    } else if (palpite > numeroSecreto) {
        result.innerHTML += `Você falou ${palpite}. Meu número é <strong>MENOR</strong> (<mark>${numeroSecreto}</mark>)</p>`
    } else if (palpite === numeroSecreto){
        result.innerHTML += `<p><strong>PARABÉNS</strong>, Você acertou ${palpite}, Eu tinha sorteado o valor <strong>${numeroSecreto}<strong>!</p>`
    } else {
        result.innerHTML += ``
    }
   
})
