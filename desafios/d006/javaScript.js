function clicou () {
    let temperatura_c  = Number(prompt('Digite uma temperatura em °C (Celsius)'))
    let conversor = temperatura_c.toLocaleString()

    document.querySelector('#temperatura_c').innerHTML = `<h2>A temperatura de ${conversor}°C, corresponde a...</h2>`

    let convertToKelvin = temperatura_c + 273.15
    let arredonda_k = convertToKelvin.toLocaleString() 
    document.querySelector('.temperatura_k'). textContent = `${arredonda_k}°K (kelvin)`

    let convertToFahrenheit = (temperatura_c * 1.8) + 32
    let arredonda_f = convertToFahrenheit.toLocaleString()
    document.querySelector('.temperatura_f').textContent = `${arredonda_f}°F (Fahrenheit)`
  
}

