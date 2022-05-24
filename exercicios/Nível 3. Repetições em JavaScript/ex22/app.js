const resul = document.querySelector('#resul')
const btn = document.querySelector('#contar')


btn.addEventListener('click', () => {

    resul.innerHTML = `<h2>Contando de 1 até 10, marcando os pares</h2>`
    let i = 0

    while(i < 10) {
        i++

        if(i % 2 === 0) {
            resul.innerHTML += `<mark>${i}</mark> &#128073` 
           
        } else {
            resul.innerHTML += `${i} &#128073`
        }
        
    }
    resul.innerHTML += `&#127937`

})
