/*Em JavaScript , um valor  truthy  é um valor que se traduz em verdadeiro 
  quando avaliado em um contexto  Booleano . 
    Todos os valores são  verdadeiros ao menos que eles sejam ou sejam como falsy ., exceto para 
    (false) (0) ("") (null) (undefined) (NaN)
*/


//Como verificar um valor (!!)


const x = ''
console.log(!!x)
//False


const y = 0
console.log(!!y)
//False


const a = null
console.log(!!a)
//False


const b = undefined
console.log(!!b)
//False


//False não Funciona em if()


const lista = []
console.log(!!lista)
//True

const object = {}
console.log(!!object)
//True


//(!!) Verificando se é verdadeiro
//(!) inverter valor Booleano


console.log(!object)
//False