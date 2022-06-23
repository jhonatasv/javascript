const btn = document.querySelector('#contar')
const res = document.querySelector('#res')


btn.addEventListener('click', () => {
    res.innerHTML = `<h2>Contagem Regressiva de 10 a 1</h2>`
    
    let i = 10

    while(i >= 1) {
        res.innerHTML += `${i}&#128073`
        i--
    }
    res.innerHTML += `&#127937`
})
