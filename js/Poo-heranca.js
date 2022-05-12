// Herança em POO

class Animal {
    constructor (name) {
        this.name = name
    }

    speak() {
        console.log(`${this.name} made some noise!`)
    }
}



class Dog extends Animal {
    constructor(name) {
        super(name)       //Super vai chama o name de Animal
    }
    speak() {             // Sobrescrevendo o speak
        console.log(`${this.name} barked!`)
    }
}

const animal = new Animal('Apollo')
const dog = new Dog('Bob')

animal.speak()
dog.speak()

