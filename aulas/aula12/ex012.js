let horario = new Date() // pega a hora atual

let horas = horario.getHours()
console.log(`Agora são exatamente ${horas} horas`)

if(horas < 12) {  // a baixo de 12 é Bom dia 
    console.log('Bom dia')
} else if (horas <= 18) {  //  entre 12 e 18 é Boa tarde,
    console.log('Boa tarde')
} else if (horas <= 23){      // entre 18 e 23 é Boa noite
    console.log('Boa noite')
} else {                       //acima de 23 Madrugada
    console.log('Boa madrugada')
}



//de forma como o gustavo guanabara pediu

// let horario = new Date()
// let hora = horario.getHours()
// console.log(`Já são exatamente ${hora} horas`)

// if (hora < 6) { // de 1 a 5 madrugada
//     console.log('boa madrugada')
// } else if (hora <= 12) { // de 6 a 12 bom dia
//     console.log('bom dia')
// } else if (hora <= 17) { // 13 a 17
//     console.log('boa tarde')
// } else if (hora >= 18) { // 18 a 23
//     console.log(' boa noite') 
// }



// primeiro exemplo da aula

// let horas = 24
// console.log(`Agora são exatamente ${horas} horas`)

// if(horas < 12) {  // a baixo de 12 é Bom dia 
//     console.log('Bom dia')
// } else if (horas <= 17) {  //  entre 12 e 17 é Boa tarde,
//     console.log('Boa tarde')
// } else if (horas <= 23){      // entre 18 e 23 é Boa noite
//     console.log('Boa noite')
// } else {                       //acima de 23 Madrugada
//     console.log('Boa madrugada') 
// }
