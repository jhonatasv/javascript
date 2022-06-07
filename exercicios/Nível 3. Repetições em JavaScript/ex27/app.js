const inpuTxt = document.querySelector('#txtn')
const btn = document.querySelector('#tab')
const res =document.querySelector('#res')

btn.addEventListener('click', () => {
    let num = Number(inpuTxt.value)

    if(inpuTxt.value === '') {
        res.innerHTML = `<p class="msg-erro">[Erro], Por Favor, Insira um Número</p>`
    } else {
        res.innerHTML = `<h2>Tabuada do ${num}</h2>`

        for(let i = 1; i <= 10; i++) {
            res.innerHTML += `<p>${num} x ${i} = <strong> ${num * i}</strong></p>`
        }
    }
})
