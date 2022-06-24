const idades = [10, 12, 20, 15, 30]

let maior = 0
let menor = 0

idades.forEach((idades)=> {
    if(idades >= 18) {
        return maior++
    } else {
        return menor++
    }
})

console.log(`temos ${maior} maior de idade`)
console.log(`temos ${menor} menor de idade`)


/*
(forEach)  "Para cada", para cada item na lista você pode fazer alguma coisa, 
mas não guarda ele na lista, se quiser poder guardar em uma nova lista
*/ 