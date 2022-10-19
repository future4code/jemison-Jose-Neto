//a) as entradas e saídas são "numeros" e "estatisticas"
//b) "numerosOrdenados" é um novo array que é gerado do arrau "numeros", "soma" é um numero que será utilizado para rodar o 


function obterEstatisticas(numeros : number[]) {

    const numerosOrdenados : number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma : number = 0
    
    for (let num of numeros) {
        soma += num
    }
    
    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }
    
    return estatisticas
}


type amostraDeIdades = {

    numeros: number[],

    obterEstatisticas: (numeros: number[]) => {}
}