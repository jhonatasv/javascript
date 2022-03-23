function clicou() {
  let distancia = Number(prompt('Digite uma distância em metro (m)'))

  let paragraph= document.querySelector('#texto')

  let novo_Texto = paragraph.textContent = `A distância de ${distancia} metros, corresponde a...`

  //calculando a quilometros (Km)

  let calculo_quilometros = `${distancia / 1000}`
  let arredonda_km = calculo_quilometros.substring(0, 5) // O método substr()retorna uma parte da string O especificado no índice.
  document.querySelector('.km').textContent = `${arredonda_km} quilômetros(Km)`

  //calculando a hectômetros (Hm)

  let calculo_hectometros = Number(`${distancia / 100}`)
  let arredonda_Hm = calculo_hectometros.toFixed(3)      //O método toFixed() retorna uma string correspondente ao número usando, arredondando o número para a quantidade de casas decimais especificadas.
  document.querySelector('.hm').textContent = `${arredonda_Hm} hectômetros (Hm)`

  //calculando O decâmetros (Dam)

  let calculo_decametros = `${distancia * 10}`
  let arredonda_Dam = calculo_decametros
  document.querySelector('.dam').textContent = `${calculo_decametros} decâmetros (Dam)`


  


  // let calculo_decimetros = `${distancia} decímetros (dm)`
  // let calculo_centimetros = `${distancia} centímetros (cm)`
  // let calculo_milimetros = `${distancia} milímetros (mm)`
  
}

