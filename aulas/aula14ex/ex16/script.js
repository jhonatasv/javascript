const inputStart = document.querySelector('#numberstart')
const inputEnd = document.querySelector('#numberend')
const inputPasso = document.querySelector('#numberpasso')
let res = document.querySelector('#res')
const btn = document.querySelector('#contar')



btn.addEventListener('click', () => {
    let numberStar = Number(inputStart.value)
    let numberEnd = Number(inputEnd.value)
    let numberPasso = Number(inputPasso.value)

    if(inputStart.value === '') {
        res.innerHTML = `<p class="msg-erro">erro, por favor preencha o campo ìnicio!</p>`
    } else if(numberPasso === 0 || inputPasso.value === '') {
        res.innerHTML = `<p class="msg-erro">passo iválido, Considerando o Passo 1</p>`

        setTimeout(() => {
            res.innerHTML = '';
           
            while (numberStar <= numberEnd) {
                res.innerHTML += `${numberStar} &#128073`
                numberStar ++
            }
            res.innerHTML += `&#127937`
        }, 4000)

    } else {
        res.innerHTML = `<p>Contado:</p>`
        
        while(numberStar <= numberEnd) {
            
            res.innerHTML += `${numberStar} &#128073`
           
            numberStar = numberStar + numberPasso
        }
        res.innerHTML += `&#127937`

    }
    
})
