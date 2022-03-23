function clicou() {
  let distancia = Number(prompt('Digite uma distância em metro (m)'))
  
  let nome = document.querySelector('#texto')
  
  let texto = nome.textContent = `A distância de ${distancia} metros, corresponde a...`
  
  //calculando a distancia por (Km)
  
  let calculo_quilometros = `${distancia / 1000}`
  let arredonda = calculo_quilometros.substring(0, 5) // O método substr()retorna uma parte da string O especificado no índice.
                                                      
  document.querySelector('.km').textContent = `${arredonda} quilômetros(Km)`

  // let calculo_hectometros = `${distancia} hectômetros (Hm)`
  // let calculo_decametros = `${distancia} decâmetros (Dam)`
  // let calculo_decimetros = `${distancia} decímetros (dm)`
  // let calculo_centimetros = `${distancia} centímetros (cm)`
  // let calculo_milimetros = `${distancia} milímetros (mm)`
  
}