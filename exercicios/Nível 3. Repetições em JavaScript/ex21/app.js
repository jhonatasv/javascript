const btn = document.querySelector('#verificar')
const res = document.querySelector('#res')

btn.addEventListener('click', () => {
    res.innerHTML = '<h2 class="text">Contando de 1 até 10</h2> <br>'
    let numero = 0;
   
    while( numero < 10) {
        numero ++
        res.innerHTML += `${numero}&#128073`
    }
    res.innerHTML += `&#127937`
   
})
