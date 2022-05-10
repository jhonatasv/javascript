const person = {
    firsName: 'jhonatas',
    lastName: 'Vieira',
    age: '22',
    hobbies: ['Jogar', 'Ler', 'Assitir filmes']
}


// const firsName = person.firsName
// const lastName = person.lastName
// const age = person.age
// const hobbies = person.hobbies[2]

const {firsName: primeiroNome, lastName, age, hobbies} = person

console.log(primeiroNome)
console.log(lastName)
console.log(age)
console.log(hobbies)
