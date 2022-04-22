/*EXERCICIO DE INTERPRETAÇÃO DE CÓDIGO

1.
 a)
10
50

b)
o console ficaria vazio


2. a)
A função recebe um string, deixa todas as letras minúsculas e detecta se no string tem a palavra "cenoura", respondendo em booleano

b)
true
true
false

*/


// EXERCICIOS DE ESCRITA DE CÓDIGO

//1. a)
function informacoesSobreMim(){
console.log("Eu sou Neto, tenho 31 anos, moro em Recife e sou estudante.")
}
informacoesSobreMim()

//b)
function informacoesDaPessoa (nome, idade, cidade, profissao){

const frase = `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}.`

console.log(frase)
return frase
}
informacoesDaPessoa('zé', 100, 'atlantis', 'piloto')


//2. a)

function somaDeDoisNumeros(num1, num2){
const soma = num1 + num2
console.log(soma)
}

somaDeDoisNumeros(10, 5)

//b)
function retornoBooleano(num1, num2){
const maiorOuIgual = num1 >= num2
console.log(maiorOuIgual)
}

retornoBooleano(5, 20)

//c)
function numeroPar(numero){
const numPar = (numero % 2) === 0
console.log(numPar)
}

numeroPar(2)

//d)
function textoMaiusculo(texto){
const tamanhomensagem = texto.length
const mensagemMaiusculo = texto.toUpperCase()

console.log(tamanhomensagem)
console.log(mensagemMaiusculo)
}

textoMaiusculo('mensagem')


//3.
function soma(num1, num2){
const soma = num1 + num2
console.log(`Soma: ${soma}`)
}

function diferenca(num1, num2){
const diferenca = num1 - num2
console.log(`Diferença: ${diferenca}`)
}

function multiplicacao(num1, num2){
const multiplicacao = num1 * num2
console.log(`Multiplicação: ${multiplicacao}`)
}

function divisao(num1, num2){
const divisao = num1 / num2
console.log(`Divisão: ${divisao}`)
}

const numero1 = Number(prompt("insira o primeiro numero"))
const numero2 = Number(prompt("insira o segundo numero"))

console.log(`Números inseridos: ${numero1} e ${numero2}`)
soma(numero1, numero2)
diferenca(numero1, numero2)
multiplicacao(numero1, numero2)
divisao(numero1, numero2)



// DESAFIO

//1. a)
const primeiraFuncao = (valor) => {
console.log(valor)
}

//b)
const segundaFuncao = (valor1, valor2) => {
const somaDaFuncao = valor1 + valor2
console.log(somaDaFuncao)
}

primeiraFuncao(segundaFuncao(10, 15))


//2.
function pitagoras(a, b){
const hip = Math.sqrt((a * a) + (b * b))

return hip
}

console.log(pitagoras(10, 15))