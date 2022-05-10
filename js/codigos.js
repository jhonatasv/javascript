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




//Objetos

const person = {
    firsName: 'jhonatas',
    lastName: 'Vieira',
    age: '22',
    hobbies: ['Jogar', 'Ler', 'Assitir filmes'],
    dog: {
        name: 'Apollo',
        age: 4
    }
}


//Primeira Forma de Fazer

// const firsName = person.firsName
// const lastName = person.lastName
// const age = person.age
// const hobbies = person.hobbies[2]


//Segunda Forma de Fazer

//destructuring
const {
    firsName: primeiroNome,
    lastName, 
    age, 
    hobbies, 
    dog: { name: dogName}
} = person

console.log(primeiroNome)
console.log(lastName)
console.log(age)
console.log(hobbies)


//adicionando nova Propriedade
//person.dog = 'Apollo'


console.log(person.dog.name)
console.log(dogName)