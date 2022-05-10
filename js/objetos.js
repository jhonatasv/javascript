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
    dog: { name: dogName} // acessando um Objeto dentro de outro
} = person

console.log(primeiroNome)
console.log(lastName)
console.log(age)
console.log(hobbies)


//adicionando nova Propriedade
//person.dog = 'Apollo'


console.log(person.dog.name)
console.log(dogName)



//acessando uma lista com Objetos

const todos = [ 
    {
        id: 1,
        description: 'Estudar programação',
        isCompleted: false,
    },
    {
        id: 2,
        description: 'Ler',
        isCompleted: true,

    },
    {
        id: 3,
        description: 'Treinar',
        isCompleted: true,
    }
]



const lastDescription = todos[2].description
console.log(lastDescription)
