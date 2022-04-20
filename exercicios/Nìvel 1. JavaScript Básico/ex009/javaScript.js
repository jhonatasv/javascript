let star = 0

function contar() {
    cliques = ++ star
    document.querySelector('#contando').innerHTML = `O contador está com <mark>${star}</mark> cliques.`      
}

function zerar() {
    star = 0
    document.querySelector('#contando').innerHTML = `você clicou ${cliques} vezes &#x1F928`
}
