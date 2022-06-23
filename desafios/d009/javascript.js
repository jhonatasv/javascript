//  function reajuster() {
//     let nome = prompt('Qual é o nome do funcionaro?')
//     let wage = Number(prompt(`Qual é o salário de ${nome}`))
//     let readjusting = parseInt(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))

//     document.querySelector('#perfil').innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>`
//     document.querySelector('.salario').textContent = `O salário atual era R$${wage}`

//     let aumento = (wage * readjusting) / 100   
//     document.querySelector('.aumento').textContent = `Com um aumento de ${readjusting}%, o salário vai aumentar R$${aumento} no próximo mês`
//     let total = wage + aumento

//     document.querySelector('.total').textContent = `E a partir daí, ${nome} vai passar a ganhar R$${total}`
// }



function reajuster() {
   let nome = prompt('Qual é o nome do funcionaro?')
   let wage = Number(prompt(`Qual é o salário de ${nome}`))
   let readjusting = parseInt(prompt(`O salário de ${nome} vai ser reajustado em qual porcentagem?`))  
   document.querySelector('#perfil').innerHTML = `<h2>${nome} recebeu um aumento salarial!</h2>` 

   let round_wage = wage.toLocaleString()
   document.querySelector('.salario').textContent = `O salário atual era R$${round_wage}`

   let aumento = (wage * readjusting) / 100
   let  round_aumento = Math.round(aumento)
   document.querySelector('.aumento').textContent = `Com um aumento de ${readjusting}%, o salário vai aumentar R$${round_aumento} no próximo mês`

   let total = wage + aumento
   let round_Total =  total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
   document.querySelector('.total').textContent = `E a partir daí, ${nome} vai passar a ganhar R$${round_Total}`
}
 
