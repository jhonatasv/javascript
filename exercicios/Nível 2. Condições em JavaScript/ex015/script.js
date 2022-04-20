btn.addEventListener('click',  function verificar() {
  let result = document.querySelector('#result')
  let data = new Date()
  let dia = data.getDate()
  let mes = data.getUTCMonth()
  let ano = data.getFullYear()
  let Diasemana = data.getDay()
  let hora = data.getHours()
  let minutos = data.getMinutes()
  let segundos = data.getSeconds()

  result.innerHTML = `<p>Dia: <mark>${dia}<mark></p>`
  
  switch (mes) {
    case 0:
      result.innerHTML += `<p>Mês: <mark>Janeiro</mark></p>`
    break

    case 1:
      result.innerHTML += `<p>Mês: <mark>Fevereiro</mark></p>`
    break

    case 2:
      result.innerHTML += `<p>Mês: <mark>Março</mark></p>`
    break

    case 3:
      result.innerHTML += `<p>Mês: <mark>Abril<mark></p>`
    break
    
    case 4:
      result.innerHTML += `<p>Mês: <mark>Maio</mark></p>`
    break

    case 5:
      result.innerHTML += `<p>Mês: <mark>Junho</mark></p>`
    break

    case 6:
      result.innerHTML += `<p>Mês: <mark>Julho</mark></p>`
    break
    
    case 7:
      result.innerHTML += `<p>Mês: <mark>Agosto</mark></p>`
    break

    case 8:
      result.innerHTML += `<p>Mês: <mark>Setembro</mark></p>`
    break

    case 9:
      result.innerHTML += `<p>Mês: <mark>Outubro</mark></p>`
    break

    case 10:
      result.innerHTML += `<p>Mês: <mark>Novembro</mark></p>`  
    break

    case 11:
      result.innerHTML += `<p>Mês: <mark>Dezembro</mark>`
    break

    default:
      '[ERRO DE DATA]'  
    break
  }

  
  result.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
  
  switch (Diasemana) {
    case 0:
      result.innerHTML += `<p>Dia da semana: <mark>Domingo</mark></p>`
    break

    case 1:
      result.innerHTML += `<p>Dia da semana: <mark>Segunda</mark></p>`
    break

    case 2:
      result.innerHTML += `<p>Dia da semana: <mark>Terça</mark></p>`
    break

    case 3:
      result.innerHTML += `<p>Dia da semana: <mark>Quarta</mark></p>`
    break

    case 4: 
      result.innerHTML += `<p>Dia da semana: <mark>Quinta</mark></p>`
    break

    case 5:
      result.innerHTML += `<p>Dia da semana: <mark>Sexta<mark></p>`
    break

    case 6:
      result.innerHTML += `<p>Dia da semana: <mark>Sábado<mark></p>`
    break

    default:
      '[ERRO] semana não encontrada]'
    break
  }
  
  result.innerHTML += `<p>Hora: <mark>${hora}<mark></p>`
  result.innerHTML += `<p>Minutos: <mark>${minutos}<mark></p>`
  result.innerHTML += `<p>Segundos: <mark>${segundos}<mark></p>`
  
})
