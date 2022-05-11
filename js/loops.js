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
