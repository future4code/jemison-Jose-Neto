console.log("exercicio 1");



const conversor=(valor, temp)=>{
    let convertido
    let kelvin = valor + 273.15
    let fahrenheit = (valor * 1.8) +32

    if (valor === !Number){
        convertido = `parametro ${valor} inválido`
    } else if (temp === 'K'){
        convertido =  `${valor} ºC equivale a ${kelvin} ºK`;
    } else if (temp === 'F'){
        convertido =  `${valor} ºC equivale a ${fahrenheit} ºF`;
    } else {
    convertido = `Erro. Parâmetro ${temp} inválido `;
    }

    return convertido
}

console.log(conversor(30, 'K'));
console.log(conversor(30, 'F'));