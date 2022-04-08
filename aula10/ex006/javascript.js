// let area = document.querySelector('#area')

area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', saiu)

function clicar() {
   area.innerText = 'clicou'
   area.style.background = 'black' // se caso não sejá atribuído o (const, let ou var) o escopo ficar Global
}

function entrar() {
    area.innerText = 'entrou'
}

function saiu() {
    area.innerText = 'saiu'
    area.style.background = 'green'
}

// segunda forma de fazer

// area.addEventListener('click', function clicar(){
//     area.innerText = 'clicou'
//     area.style.background = 'black'
// })

// area.addEventListener('mouseenter', function entrar(){
//     area.innerText = 'entrou'
// })

// area.addEventListener('mouseout', function saiu(){
//     area.innerText = 'saiu'
//     area.style.background = 'green'
// })
