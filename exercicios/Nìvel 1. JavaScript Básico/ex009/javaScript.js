let star = 0
let res = document.querySelector('#contando')

function contar() {
    star ++
    res.innerHTML = `O contador está com <mark>${star}</mark> cliques.` 
    return star     
}

function zerar() {
    res.innerHTML = `você clicou ${star} vezes &#x1F928`
    star = 0
}
