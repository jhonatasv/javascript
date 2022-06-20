let num = [5, 8, 2, 9, 3]
num.push(1) //adicionando valor no ultimo índece
num.sort() // retornando lista ordenada
console.log(num)
console.log(`o vetor tem ${num.length} posições`)
console.log(`o primeiro valor é ${num[0]}`)

let pos = num.indexOf(8)
if(pos == -1) {
    console.log('o numero não foi encontrado')
} else {
    console.log(`o valor está na posicão ${pos}`)
}

//console.table(num)
