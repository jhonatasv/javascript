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
            


// se for menor de 16 não (Vota). entre 16 e 17 (Voto opcinal). de 18 a 65 (Voto Obrigatório). Maior do que 120 (Terror do INSS) 

let idade = 17
console.log(`Você tem ${idade} anos`)


if (idade < 16) { // menor de 16 não vota
    console.log('não vota')
} else if (idade < 18) { // entre 16 e 17 e opcinal, 
    console.log('Voto opcinal entre 16 e 17')
} else if (idade < 65 && idade < 100) { // se a idade for entre 65 e 100 (Voto opcinal)
    console.log('Voto obrigatorio')
} else if(idade > 120) {          // se a idade for maior do que 120 então (terror do INSS)
    console.log('terror do INSS')
} else {
    console.log('voto opcional a partir de 65')
}

