let agora = new Date()
let diaSem = agora.getDay()

/*
    (Dia da semana)
    
    0 = Domingo
    1 = Segunda
    2 = Terça
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sábado
*/


switch(diaSem) {
    case 0:
        console.log('Domingo')
        break

    case 1:
        console.log('Segunda_feira')
        break

    case 2:
        console.log('Terça-Feira')
        break

    case 3:
        console.log('Quarta-Feira')    
        break

    case 4:
        console.log('Quinta-Feeira')    
        break

    case 5: 
        console.log('Sexta-Feira')
        break

    case 6:
        console.log('Sábado')    
        break

    default:
        console.log('[Erro] dia iválido!')
        break
}




// Condição Aninhada 

// if (diaSem == 0) {
//     console.log('Domingo')
// } else if (diaSem == 1) {
//     console.log('Segunda-Feira')
// } else if (diaSem == 2) {
//     console.log('Terça-Feira')
// } else if(diaSem == 3) {
//     console.log('Quarta-Feira')
// } else if (diaSem == 4) {
//     console.log('Quinta-Feira')
// } else if (diaSem == 5) {
//     console.log('Sexta-Feira')
// } else {
//     console.log('Sábado')
// }