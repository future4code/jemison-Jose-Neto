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

let segundoMaiorEMenor = []

array.sort((a, b) => a - b)
segundoMaiorEMenor.push(array[array.length -2])
segundoMaiorEMenor.push(array[1])

return segundoMaiorEMenor
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   const atores = [filme.atores.join(', ')]

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

 return pessoas.filter((pessoa) => {
    if (pessoa.idade > 14 && pessoa.altura >= 1.5 && pessoa.idade < 60)
    return pessoa
})
}
// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    return pessoas.filter((pessoa) => {
        if (!(pessoa.idade > 14 && pessoa.altura >= 1.5 && pessoa.idade < 60))
        return pessoa
    })
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

    // INCOMPLETO


function saldoMenosCompras(saldoMenos){
    
    
    for (let i = 0; i < contas.length; i++){
        const valorDasCompras = 0;
        const somaDasCompras = contas[i].compras.reduce(
        (valorInicial, valorAtual) => valorInicial +valorAtual,
        valorDasCompras)

        let saldoAtual = contas[i].saldoTotal - somaDasCompras

        
return saldoAtual


    }
}



}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    //INCOMPLETO
    
    consultas.sort(function (a, b) {
        if (a.nome > b.nome) {
          return 1;
        }
        if (a.nome < b.nome) {
          return -1;
        }
        return 0;
      })
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   
}