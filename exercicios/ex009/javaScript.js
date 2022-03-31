// let star = 0

// function contar() {
//     star ++
//     document.querySelector('#contando').innerHTML = `O contador está com <mark>${star}</mark> cliques.`
// }


// function zerar() {
//     star = 0
//     document.getElementById('contando').textContent = ''
// }


let star = 0

function contar() {
    cliques = star ++
    document.querySelector('#contando').innerHTML = `O contador está com <mark>${star}</mark> cliques.`      
}

function zerar() {
    star = 0
    document.querySelector('#contando').textContent = ''
    document.querySelector('#contando').textContent = `você clicou ${cliques + 1}`
}
