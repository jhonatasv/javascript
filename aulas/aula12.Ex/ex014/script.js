function mudarImg() {
    let msg = document.querySelector('#msg')
    let img = document.querySelector('#imagem')
    let data = new Date()
    let hora = data.getHours()

    msg.innerHTML = `Agora são <strong> ${hora} </strong> horas`
                                            
    if (hora >= 0 && hora < 12) { 
        img.src = 'fotomanha.jpg'
        document.body.style.background = '#255459'
        document.style.tran
    } else if (hora >= 12 && hora <= 18) {
        img.src = 'fototarde.jpg'
        document.body.style.background = '#D99066'

    } else {
        img.src = 'fotonoite.jpg' 
        document.body.style.background = '#473959'
    }
}

