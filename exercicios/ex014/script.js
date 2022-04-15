btn.addEventListener('click', function button() {
    let p = document.querySelector('#result')
    let data = new Date()

    p.innerHTML = `O que eu recebi do sistema foi <mark> ${data}</mark>`

})
