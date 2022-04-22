btn.addEventListener('click', verificar)

function verificar() {
    let nome = prompt('Qual é o nome do aluno:?')
    let nota1 = Number(prompt(`A primeira nota de ${nome}:`))
    let nota2 = Number(prompt(`Segunda nota de ${nome}:`))
    let result = document.querySelector('#result')
    let media = (nota1 + nota2) / 2
   
    result.innerHTML = `<h2>Analisando a situação de ${nome}</h2>`
    result.innerHTML += `<p>Com as notas ${nota1} e ${nota2} a <strong>média é ${media}</strong></p>`

    if(media > 6) {
        result.innerHTML += `<p>Com média acima de 6.0, o aluno está <strong>APROVADO</strong></p>`
        document.getElementsByTagName('strong')[1].style.backgroundColor = '#00800091'
    } else if (media <= 6 && media >= 3) {
        result.innerHTML += `<p>Com média entre 3.0 e 6.0, o aluno está em <strong>RECUPERAÇÂO</strong></p>`
        document.getElementsByTagName('strong')[1].style.backgroundColor = '#ffff1f8a'
    } else {
        result.innerHTML += `<p>Com a média abaixo de 3,0 o aluno está <strong>REPROVADO</strong></p>`
        document.getElementsByTagName('strong')[1].style.backgroundColor = '#ff00008f'
    }
}
