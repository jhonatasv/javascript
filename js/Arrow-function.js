function soma(a, b) {
    return a + b
}

const somaValue = soma(2, 2)
console.log(somaValue)



//Passando valores Padrôes para parâmetros

//Primeira forma de fazer
function sum(a, b = 10) {
    return a + b
}

const sumValue = sum(2)
console.log(sumValue)



//Segunda Forma de Fazer

//Arrow function 

const sumArryow = (a, b = 10) => {
    return a + b
}

const ArryowValue = sumArryow(2)
console.log(ArryowValue)



//terceira Forma de fazer

const sumArryow2 = (a, b = 10) => a + b;

const ArryowValue2 = sumArryow2(2)
console.log(ArryowValue2)
