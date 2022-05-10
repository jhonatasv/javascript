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