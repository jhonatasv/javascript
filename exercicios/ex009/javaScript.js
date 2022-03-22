function contar() {
    let comecando = 0
    let contando = `${comecando += 1}` 
    document.getElementById('contar').textContent = `${contando}`
}

function zerar() {
    document.getElementById('contar').textContent = ''
}