const btn = document.querySelector('#contar')
const res = document.querySelector('#res')


btn.addEventListener('click', () => {
    res.innerHTML = `<h2>Contagem Regressiva de 10 a 1</h2>`
    
    let i = 11

    while(i > 1) {
        i--
        res.innerHTML += `${i}&#128073`
    }
    res.innerHTML += `&#127937`
})
