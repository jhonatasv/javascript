let star = 0

function contar() {
    star ++
    document.querySelector('#contando').innerHTML = `O contador está com <mark>${star}</mark> cliques.`
}


function zerar() {
    star = 0
    document.getElementById('contando').textContent = ''
}
