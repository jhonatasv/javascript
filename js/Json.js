//convertendo para JSON
const todosJSON = JSON.stringify(todos)
console.log(todosJSON)



//convetendo de volta

const todosList = JSON.parse(todosJSON)
console.log(todosList)

