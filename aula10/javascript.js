area.addEventListener('click', clicar)
area.addEventListener('mouseenter', entrar)
area.addEventListener('mouseout', saiu)

function clicar() {
   let area = document.querySelector('#area')
    element = area.innerText = 'clicou'
    area.style.color = 'black' // se não colocar (const, let ou var) o escopo ficar Global
}

function entrar() {
    element = area.innerText = 'entrou'
}

function saiu() {
    element = area.innerText = 'saiu'
    area.style.color = 'white'
}