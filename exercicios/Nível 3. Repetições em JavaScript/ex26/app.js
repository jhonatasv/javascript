const inputStart = document.querySelector('#valorInicial')
const inputFinal = document.querySelector('#valorFinal')
const btn = document.querySelector('#contar')
const res = document.querySelector('#res')

btn.addEventListener('click', () => {
    let valorInicial = parseInt(inputStart.value)
    let valorFinal =  parseInt(inputFinal.value)
    
    res.innerHTML = `<h2>Contando de ${valorInicial} até ${valorFinal} </h2>`
    
    if(valorInicial === valorFinal) {
        res.innerHTML = `<p>Não é possivel contar, pois os números são iguas &#127937</p>`

    } else if(valorInicial < valorFinal) {
                  
        while(valorInicial <= valorFinal) {
            res.innerHTML += `${valorInicial} &#128073`
            valorInicial++
        }
        
        res.innerHTML += `&#127937`

    } else if(valorInicial > valorFinal) {
    
        while(valorInicial >= valorFinal) {
            res.innerHTML += `${valorInicial} &#128073`
            valorInicial--
        }
        
        res.innerHTML += `&#127937`
    
    }

})
        