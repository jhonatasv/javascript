btn.addEventListener('click',  function verificar() {
    let resultado = document.querySelector('#result')
    let data = new Date()
    let dia = data.getDate()
    let mes = data.getUTCMonth()
    let ano = data.getFullYear()
  //  let Diasemana = data.getDay() 
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let segundos = data.getSeconds()

    resultado.innerHTML = `<p>Dia: <mark>${dia}<mark></p>`
    resultado.innerHTML += `<p>Mês: <mark>${mes}</mark></p>`
    resultado.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
//    resultado.innerHTML += `<p>Dia da semana: <mark>${Diasemana}<mark></p>`
    resultado.innerHTML += `<p>Hora: <mark>${hora}<mark></p>`
    resultado.innerHTML += `<p>Minutos: <mark>${minutos}<mark></p>`
    resultado.innerHTML += `<p>Segundos: <mark>${segundos}<mark></p>`

})
