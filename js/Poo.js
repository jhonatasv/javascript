//Programação Orientada a Objetos (POO)



class Perfil {
    constructor(firstName, LastName, age) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }
}

const person1 = new Perfil('felipe', 'vieira', 17)
console.log(person1)












//Criando Metodos

class Perfil2 {
    constructor(firstName, LastName, age) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }

    getFullName() {
        console.log(`${this.firstName} ${this.LastName}`)
    }
}

const person2 = new Perfil2('felipe', 'vieira', 17)
console.log(person2)

//Chamando o metodo
person2.getFullName()







//Metodos Estáticos

class Perfil3 {
    constructor(firstName, LastName, age) {
        this.firstName = firstName;
        this.LastName = LastName;
        this.age = age;
    }

    getFullName() {
        console.log(`${this.firstName} ${this.LastName}`)
    }

    static speak() { //Estático
        console.log('Hello World')
    }
}

const person = new Perfil3('felipe', 'vieira', 17)
console.log(person)

//Chamando o metodo
person.getFullName()


//chamando metodo Estático
Perfil3.speak()


// Não funcionar no modo Estáticos
//person.speak()