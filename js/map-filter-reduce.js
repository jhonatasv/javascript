//Multiplicando itens através do map().

const number = [1, 2, 3, 4, 5]

const numberMultipliedByTwo = number.map(function(number){
    return number * 2
})

console.log(numberMultipliedByTwo)


//usando Arrow Function
const doubles = number.map((number) => {
    return number * 2
})

console.log(doubles)




//retonando uma nova lista usando filter

const ages = [8, 13, 27, 30, 22, 40]

const evenAges = ages.filter(function(age){
    return age % 2 === 0
})

console.log(evenAges)

// OU

function numberPAr(number) {
    return number % 2 == 0
}

const ano = [8, 13, 27, 30, 22, 40].filter(numberPAr)
console.log(ano)




//somando todas as idade usando reduce

const idades = [8, 13, 27, 30, 22, 40]

const sumOfAges = idades.reduce(function(idade, acumulador){
    return acumulador + idade
}, 0)

console.log(sumOfAges)

