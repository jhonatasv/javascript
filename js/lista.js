// lista com Objetos 

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


//Pegando apenas as (description) da lista de Objetos
for ( let description of todos) {
    console.log(description.description)
}



//for...in

const person = {
    name: 'jhonatas',
    age: 21,
}

//Acessando propriedades do Objeto

//ele não é muito Perfomático
for (property in person) {
    console.log(person[property])
}
