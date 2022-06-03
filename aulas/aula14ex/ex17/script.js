const inpuText = document.querySelector('#txtnumr')
const btn = document.querySelector('#verificar')
const res = document.querySelector('#res')

btn.addEventListener('click', () => {
    let iputNumero = Number(inpuText.value) 
    res.innerHTML = '';

    for(let i = 1; i <= 10; i++) {
        res.innerHTML += `<p>${iputNumero} x ${i} = ${iputNumero * i}</p>`
    }
})
