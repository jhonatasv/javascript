const btn = document.querySelector('#verificar')
const res = document.querySelector('#res')

btn.addEventListener('click', () => {
    res.innerHTML = '<h2 class="text">Contando de 1 até 10</h2> <br>'
    
    for(let i = 1; i <= 10; i++) {
        res.textContent += `${i}`
    }
})
