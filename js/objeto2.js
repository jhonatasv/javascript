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




//convertendo para JSON
const todosJSON = JSON.stringify(todos)
console.log(todosJSON)



//convetendo de volta

const todosList = JSON.parse(todosJSON)
console.log(todosList)

