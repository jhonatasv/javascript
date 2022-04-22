// let idade = 67
//     console.log(`Você tem ${idade} anos`)

// if (idade < 16) {
//     console.log('não vota')

// } else if (idade < 18 || idade > 65 ) {
//     console.log('Voto opcinal') 
// } else  {
//     console.log('Voto obrigatório')
// }





//segunda forma de fazer

// let idade = 18

//  if (idade < 16) {
//     console.log('não vota')

// } else if (idade < 18 || idade > 65 ) {
//     console.log('Voto opcinal') 
// } else if (idade >= 18) {
//     console.log('Voto obrigatório')
// }
            


// se for menor de 16 não (Vota). entre 16 e 17 (Voto opcional). de 18 a 65 (Voto obrigatório). Maior do que 120 (Terror do INSS) 

let idade = 120
console.log(`Você tem ${idade} anos`)


if (idade < 16) { 
    console.log('não vota') // menor de 16 não vota
} else if (idade < 18) { 
    console.log('Voto opcional entre 16 e 17') // entre 16 e 17
} else if (idade <= 65) { 
    console.log('Voto obrigatorio') // se a idade for entre 18 e 65
} else if(idade >= 120) {          
    console.log('terror do INSS') // se a idade for maior do que 120
} else {
    console.log('Voto opcional a partir de 65') // se a idade for entre 66 e 119 
}

