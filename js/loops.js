//Loops


//Enquanto o (i) que é 0, for menor do que 10, Ele vai Continuar adicionando mais 1 que é (i++)
for (let i = 0; i < 10; i++) {
    console.log(i)
}




//Trabalhando com Listas
const cars = ['Ferrari', 'Tesla', 'Mercedes']


// maneira 1 de fazer

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i])
}




// maneira 2 de fazer

//para cada Car na Lista de Cars a gente vai loga car

for(let car of cars) {
    console.log(car)
}



// maneira 3 de fazer, logando com numero da (index) dos cars

cars.forEach(function(car, index) {
    console.log(index)
    console.log(car)
})



//while loop

let index = 0

while (index < 10) {
    index++
    //Mesma coisa de baixo

    //index = index + 1
    //index += 1

    console.log('index é menor do que 10')
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
