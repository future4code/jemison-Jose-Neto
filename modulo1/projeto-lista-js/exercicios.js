// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
  let altura = Number(prompt("digite a altura do retangulo"))
  let largura = Number(prompt("digite a largura do retangulo"))
  let calcArea = altura * largura
  
  console.log(calcArea)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt("digite o ano atual"))
  let anoNascimento = Number(prompt("digite seue ano de nascimento"))
  let idade = anoAtual - anoNascimento
  
  console.log(idade)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
 
return peso / (altura * altura)

}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  const nome = prompt("qual é o seu nome?")
  let idade = prompt("qual é a sua idade?")
  const email = prompt("qual é o seu email?")

  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)

}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
  const cor1 = prompt("qual sua cor favorita?")
  const cor2 = prompt("qual sua segunda cor favorita?")
  const cor3 = prompt("qual sua terceira cor favorita?")
   
  console.log([cor1, cor2, cor3])
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
  const texto = prompt('Digite algo')
  const maiuscula = texto.toUpperCase()

  console.log("sexto", maiuscula)
  return maiuscula
  }

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui

return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui

const tamanho1 = string1.length
const tamanho2 = string2.length

const resultado = tamanho2 === tamanho1
return resultado

}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
const ultimo = array[array.length - 1]
const primeiro = array[0]
array.splice(0, 1, ultimo) 
array.splice(array.length -1, 1, primeiro)

return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
const primeiraString = string1.toLowerCase()
const segundaString = string2.toLowerCase()
const igualdade = primeiraString === segundaString

return igualdade
}


// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
  let anoAtual = Number(prompt('digite o ano atual'))
  const anoNascimento = Number(prompt('digite seu ano de nascimento'))
  const anoCarteira = Number(prompt('digite o ano de emissão da carteira'))
  
  let idade = anoAtual - anoNascimento
  let tempoDeCarteira = anoAtual - anoCarteira

  let renov1 = 
  

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
let cond1 = ano % 400 === 0
let cond2 = (ano % 4) === 0
let cond3 = (ano % 100) !== 0
let cond4 = cond1 && cond2 && cond3

console.log(cond1)
console.log(cond2)
console.log(cond3)
console.log(cond4)

}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}
