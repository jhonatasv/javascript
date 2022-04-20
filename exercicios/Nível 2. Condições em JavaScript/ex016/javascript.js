verificar.addEventListener('click', function verificar() {
    let ano = Number(prompt('Em que ano você nasceu?'))
    let resultado = document.querySelector('#result') 
    let calendario = new Date()
    let anoAtual = calendario.getFullYear()
    
    let calculo = anoAtual - ano
    
    resultado.innerHTML = `<p>Quem nasceu em ${ano} vai completa <strong>${calculo}</strong> anos em ${anoAtual}</p>`
})
