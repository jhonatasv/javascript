let amigo = {
    nome: 'Jóse',
    sexo: 'M',
    peso: 85.4,
    engordar(p=0) {
        console.log('Engordou')
        this.peso += p
    }

}

amigo.engordar(2)

console.log(`${amigo.nome} pesa ${amigo.peso}`)

function mostraNome(nome) {
    return nome ? `Sr. ${nome}` : 'sem nome'
}


let perfil = mostraNome()
console.log(perfil)

function imprimir(nome) {
    return nome && 'Sr. ' + nome || 'sem nome'
}

let perfil2 = imprimir('jhon')
console.log(perfil2)
