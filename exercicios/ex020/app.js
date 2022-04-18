verificar.addEventListener('click', function verficar() {
    let mes = prompt('Digite o mês em exetenso (ex: Setembro)')
    let result = document.querySelector('#result')
   

    switch (mes) {
        case 'janeiro':
            result.innerHTML = `<p>No Mês de <mark>${mes}</mark>, estamos na estação <mark><strong>INVERNO</strong></mark></p>`
        break

        case 'fevereiro':
            result.innerHTML = `<p>No Mês de <mark>${mes}</mark>, estamos na estação <mark><strong>INVERNO</strong></mark></p>`
        break

        case 'março':
            result.innerHTML = `<p>No Mês de <mark>${mes}</mark>, estamos na estação <mark><strong>INVERNO</strong></mark></p>`
        break
        
        case 'abril':
            result.innerHTML = `<p>No Mês de <mark>${mes}</mark>, estamos na estação <mark><strong>PRIMAVERA</strong></mark></p>`
        break

        case 'maio':
            result.innerHTML = `<p>No Mês de <mark>${mes}</mark>, estamos na estação <mark><strong>PRIMAVERA</strong></mark></p>`
        break

        case 'junho':
            result.innerHTML = `<p>No Mês de <mark>${mes}</mark>, estamos na estação <mark><strong>PRIMAVERA</strong></mark></p>` //?
        break

        case 'julho':
            result.innerHTML = `<p>No Mês de <mark>${mes}</mark>, estamos na estação <mark><strong>VERÂO</strong></mark></p>` 
        break

        case 'agosto':
            result.innerHTML = `<p>No Mês de <mark>${mes}</mark>, estamos na estação <mark><strong>VERÂO</strong></mark></p>` 
        break

        case 'setembro':
            result.innerHTML = `<p>No mês <mark>${mes}</mark>, estamos na estação <mark><strong>VERÂO</strong></mark></p>`
        break

        case 'outubro':
            result.innerHTML = `<p>No mês <mark>${mes}</mark>, estamos na estação <mark><strong>OUTONO</strong></mark></p>`
        break

        case 'novembro':
            result.innerHTML = `<p>No mês <mark>${mes}</mark>, estamos na estação <mark><strong>OUTONO</strong></mark></p>`
        break

        case 'dezembro':
            result.innerHTML = `<p>No mês <mark>${mes}</mark>, estamos na estação <mark><strong>OUTONO</strong></mark></p>`
        break

        default:
            result.innerHTML = `<p>No Mês <mark>${mes}</mark>, estamos na estaçâo <strong><mark>INDEFINIDA.</mark></strong></p>`
        break

    }

})
