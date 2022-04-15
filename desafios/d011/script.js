btn.addEventListener('click', function verificar() {
    let ano = Number(prompt('Qual é o ano que você quer Verificar?'))
    let result = document.querySelector('#result')
    
    result.innerHTML = `<h2>Analisando o  ano de ${ano}...</h2>`

      
    if (ano % 4 == 0) {
        result.innerHTML += `<p>O ano de ${ano} <span class="green">È BISSEXTO</span> &#9989</p>`
    } else {
        result.innerHTML += `<p>O ano de ${ano} <span class="red">NÂO É BISSEXTO</span> &#10060</p>`
    }

})
