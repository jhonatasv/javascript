const inpuNUmber = document.querySelector('#number')
const btn = document.querySelector('#contar')
const res = document.querySelector('#res')

btn.addEventListener('click', () => {
   let inputValue = parseInt(inpuNUmber.value)

   let i = 0

    if(inputValue < i) {
       res.innerHTML = `<p class="msg-error">[Error] insira um numero positivo</p>`
   
    } else if(inpuNUmber.value.length === 0) {
       res.innerHTML = `<p class="msg-error"> Ops.. Insira um número</p>`

    } else {
       res.innerHTML = `<h2>Contando de 0 até ${inputValue}</h2>`


        for(let a = 0; a <= inputValue; a++) {
            res.innerHTML += `${a}&#128073`
        }
        res.innerHTML += `&#127937`
    }
    

})
