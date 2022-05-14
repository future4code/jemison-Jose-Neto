// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   const tamanhoArray = array.length

   return tamanhoArray
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    const arrayRevertido = array.reverse()

    return arrayRevertido
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    
    function ordenarNumeros(a, b) {
        return a - b;
    }
    
    return array.sort(ordenarNumeros)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
 let arrayPares = []
 for (let i = 0; i < array.length; i++){
     if (array[i] % 2 === 0){
         arrayPares.push(array[i])
     }
 }
return arrayPares

}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayParesAoQuad = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            arrayParesAoQuad.push(array[i] * array[i])
        }
    }
   return arrayParesAoQuad
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maiorNum = 0
    let elemento = 0
    for (let i = 0; i < array.length ; i++){
       elemento = array[i]
       if (elemento > maiorNum){
          maiorNum = elemento
       }
    }
    return maiorNum
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {

const objeto = {
    maiorNumero: Math.max(num1, num2),
    maiorDivisivelPorMenor: Math.max(num1, num2) % Math.min(num1, num2) === 0,
    diferenca: Math.max(num1, num2) - Math.min(num1, num2)
}
return objeto
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {

const arrayNumerosPares = []
    for(let i = 0; arrayNumerosPares.length < n; i++){
        if (i % 2 === 0){
            arrayNumerosPares.push(i)
}}
return arrayNumerosPares
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

    if(ladoA === ladoB && ladoB === ladoC){
        return "Equilátero"
    } else if( (ladoA === ladoB && ladoB !== ladoC) || (ladoA === ladoC && ladoC !== ladoB) || (ladoB === ladoC && ladoC !== ladoA)){
        return "Isósceles"
    }else if(ladoA !== ladoB && ladoB !== ladoC && ladoA !== ladoC){
        return "Escaleno"
    }
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    const atores = filme.map((nomeAtor) => {
        return nomeAtor.atores
    })

return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {

let pessoaAnonima = {
    ...pessoa,
nome: 'ANÔNIMO' }
return pessoaAnonima
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

    const arrayAutorizadas = []


    for(let i = 0; i < pessoas.length; i++){
        if (pessoas.idade > 14 && pessoas.altura >= 1.5 && pessoas.idade < 60){
            arrayAutorizadas.push(i)
        }}
    console.log(arrayAutorizadas);
    return arrayAutorizadas

}
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
  
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}