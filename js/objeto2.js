
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

//convertendo para JSON

const todosJSON = JSON.stringify(todos)
console.log(todosJSON)






/*
    JSON.parse()
    O método JSON.parse() analisa uma string JSON, o valor ou um objeto JavaScript descrito pela string. 
    Uma função reviver opcional pode ser fornecida para executar uma transformação no objeto que será retornado.
*/


//convetendo de volta

const todosList = JSON.parse(todosJSON)
console.log(todosList)

