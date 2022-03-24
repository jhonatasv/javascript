function clicou() {
  let distancia = Number(prompt('Digite uma distância em metro (m)'))

  let paragraph= document.querySelector('#texto')

  let novo_Texto = paragraph.textContent = `A distância de ${distancia} metros, corresponde a...`


  let calculo_quilometros = distancia / 1000
  let arredonda_km = calculo_quilometros.toLocaleString() //O método toLocaleString() retorna uma string com uma representação sensível a linguagem deste número.
  document.querySelector('.km').textContent = `${arredonda_km} quilômetros(Km)`


  let calculo_hectometros = distancia / 100
  let arredonda_Hm = calculo_hectometros.toLocaleString()     
  document.querySelector('.hm').textContent = `${arredonda_Hm} hectômetros (Hm)`

 
  let calculo_decametros = distancia / 10
  document.querySelector('.dam').textContent = `${calculo_decametros} decâmetros (Dam)`


  let calculo_decimetros = distancia * 10
  let arredonda_Dm = calculo_decimetros.toLocaleString()  
  document.querySelector('.dm').textContent =`${arredonda_Dm} decímetros (dm)`

  
  let calculo_centimetros = distancia * 10000
  let arredonda_Cm = calculo_centimetros.toLocaleString()
  document.querySelector('.cm').textContent = `${arredonda_Cm} centímetros (cm)`

  let calculo_milimetros = distancia * 1000
  let arredonda_Mm = calculo_milimetros.toLocaleString()
  document.querySelector('.mm').textContent = `${arredonda_Mm} milímetros (mm)`
  
}

