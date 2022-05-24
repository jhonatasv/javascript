const btn = document.querySelector('#contar')
const res = document.querySelector('#resul')

btn.addEventListener('click', () => {
    
    res.innerHTML += `<h2>Números pares de 1 até 10</h2>`

    let i = 0
    
    while(i < 10) {
        i++
        
        if(i % 2 === 0) {
            res.innerHTML += `${i} &#128073`
        }
        
    }
    res.innerHTML += `&#127937` 
})