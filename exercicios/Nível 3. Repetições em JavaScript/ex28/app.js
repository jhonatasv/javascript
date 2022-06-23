const txtInput = document.querySelector('#txtnu')
const btn = document.querySelector('#fatorial')
const res = document.querySelector("#res")

btn.addEventListener('click', () => {
    let inpuValue = txtInput.value

    res.innerHTML = `<h2>Calculando ${inpuValue}!</h2>`
    let fator = 1
    
    
    for(let c = inpuValue; c > 1; c--) {
        fator *= c
        res.innerHTML += `${c} x ` 
    }

    res.innerHTML += ` 1 = <stong>${fator}</strong>` 
    
  
})
