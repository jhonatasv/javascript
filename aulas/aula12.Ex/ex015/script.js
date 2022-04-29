function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let f_ano = document.querySelector('#txtano')
    let res = document.querySelector('#res')

    if(f_ano.value.length == 0 || Number(f_ano.value) > ano) {
        alert(`[ERRO] Verifique os dados e tente novamente ${typeof(f_ano)}`)

    } else {
        let fsex = document.getElementsByName('redsex')
        let idade = ano - Number(f_ano.value)
        let genero = ''
        let img = document.createElement('img') //criar uma tag (img)
        img.setAttribute('id', 'foto') //adicionando um id ao (img)
        
        if(fsex[0].checked) {
            genero = 'Masculino'
            
            if (idade >= 0 && idade < 10) { //0 e 10
                img.setAttribute('src', 'img/bebe.m.jpg')
            } else if (idade < 21) { // 11 e 20
                img.setAttribute('src', 'img/jovem.m.jpg')
            } else if (idade < 29) { // 21 e 28
                img.setAttribute('src', 'img/adulto.m.png')
            } else {
                img.setAttribute('src', 'img/idoso.m.jpg')
            }
        } else if (fsex[1].checked){
            genero = 'Feminino'
           
            if(idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/bebe.f.jpg')
            } else if (idade < 21) {
                img.setAttribute('src', 'img/jovem.f.jpg')
            }  else if (idade < 29) {
                img.setAttribute('src', 'img/adulto.f.jpg')
            } else {
                img.setAttribute('src', 'img/idosa.f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos uma pessoa de ${idade} do sexo ${genero}`
        res.appendChild(img)
        
    }
    
}
