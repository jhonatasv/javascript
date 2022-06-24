const txtInput = document.querySelector('#txtnu')
const btn = document.querySelector('#fatorial')
const res = document.querySelector("#res")

btn.addEventListener('click', () => {
    let inpuValue = txtInput.value

    if(txtInput.value == '') {
        res.innerHTML = `<p class="msg-error">Ops...Preencha o campo </p>`
    } else if(txtInput.value > 21) {
        res.innerHTML = `<p class="msg-error">[Error], Preencha o campo entre (1 e 21)<p>`
    } else {
        res.innerHTML = `<h2>Calculando ${inpuValue}!</h2>`
        let fator = 1

        for(let c = inpuValue; c > 1; c--) {
            fator *= c
            res.innerHTML += `${c} x ` 
        }
        res.innerHTML += `1 = <strong>${fator.toLocaleString()}</strong>` 
    
    }
    
  
})
