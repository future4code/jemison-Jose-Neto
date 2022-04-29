/* EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO
1. a)
-recolhe um número inserido pelo usuário
-converte a resposta do usuario (string) em número(number)
-faz o teste avaliando se o numero é par ou não, gerando as mensagens pré-definidas

b) números pares

c) números ímpares


2. a)
o código serve para consultar os preços das frutar determinadas

b)
"O preço da fruta Maçã é R$ 2.25"

c)
"O preço da fruta Pêra é R$ 5"


3. a)
está pedindo para o usuário inserir alguma infomração e convertendo essa informação em um número

b)
-Esse número passou no teste
-Não aparecerá nada, pois não tem nada no código que defina alguma ação para este caso

c)
o console não vai conseguir imprimir "mensagem", pois ela está dentro do "if"

*/


// EXERCÍCIO DE ESCRITA DE CÓDIGO

//1.
const idade = Number(prompt("Qual a sua idade?"))

if (idade >= 18){
    console.log("Você pode dirigir")
}
   else {
        console.log("Você não pode dirigir")
}


//2.

let turno = prompt("Em que turno você estuda? M / V / N").toLowerCase()

if (turno === 'm'){
    console.log("Bom Dia!")
}
else if (turno === 'v'){
    console.log("Boa Tarde!")
}
else if (turno === 'n'){
    console.log("Boa Noite!")
}
else {
    console.log("Por favor responda com M, V ou N")
}


//3.
switch (turno){
    case "m":
        console.log("Bom Dia!")
        break
    case 'v':
        console.log("Boa Tarde!")
        break
    case 'n':
        console.log("Boa Noite!")
        break
    default:
        console.log("Por favor responda com M, V ou N")
}


//4.
/*
const genero = prompt("Qual o gênero do filme?").toLowerCase()
const preco = prompt("Qual o preço do ingresso?")

if (genero === "fantasia" && preco <= 15){
    console.log('Bom filme!') 
}
else {
    console.log('Escolha outro filme :(') 
}

*/


//DESAFIO

//1.
const genero = prompt("Qual o gênero do filme?").toLowerCase()
const preco = prompt("Qual o preço do ingresso?")

if (genero === "fantasia" && preco <= 15){
    const lanchinho = prompt('Qual lanchinho você vai comprar?')
    console.log('Bom filme!')
    console.log(`Aproveite seu ${lanchinho}!`) 
}
else {
    console.log('Escolha outro filme :(') 
}

//2.
// O exercício ficou incompleto pq nao tive tempo de desenvolver o resto da minha lógica. Pretendia criar uma função pra me dar o valor do ingresso diretamente. Fica ai um "rascunho".
const nomeCompleto = prompt('Nome completo')
const tipoDeJogo = prompt('Tipo de jogo').toLowerCase()
const etapaDoJogo = prompt('Etapa do jogo').toLowerCase()
const categoria = prompt('Categoria')
const quantidadeDeIngressos = prompt('Quantidade de ingressos')


function valorIngresso(){
        switch (etapaDoJogo){

        case etapaDoJogo === 'sf':
            if (categoria === 1){
                1320
            }else if (categoria === 2){
                880
            }else if (categoria === 3){
                550
            }else if (categoria === 4){
                220
            }
        break

        case etapaDoJogo === 'dt':
            if (categoria === 1){
                660
            }else if (categoria === 2){
                440
            }else if (categoria === 3){
                330
            }else if (categoria === 4){
                170
            }           
        break

        case etapaDoJogo === 'fi':
            if (categoria === 1){
                1980
            }else if (categoria === 2){
                1320
            }else if (categoria === 3){
                880
            }else if (categoria === 4){
                330
            }
        break
    }
}

