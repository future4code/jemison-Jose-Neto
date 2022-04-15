/* 
exercicio de imperpretação

1.
false
false
(nao consegui entender como interpretar o "!resultado")
boolean

2 e 3.
as informações coletadas pelo prompt vem em formato de string (o console vai imprimir a junção dos numeros digitados e não a soma), sendo necessário converter em numero antes de se fazer alguma operação
*/

// 1.

let suaIdade = Number(prompt("qual é sua idade?"))
let idadeAmigo = Number(prompt("qual a idade do seu melhor amigo?"))
let diferencaDeIdade = suaIdade - idadeAmigo
let idadeMaior = suaIdade > idadeAmigo

console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior )
console.log(diferencaDeIdade)


// 2. a)

let numeroPar = Number(prompt("digite um numero par"))
let divisaoPorDois = numeroPar % 2
console.log(divisaoPorDois)

// b)o resultado da operação sempre é zero, pois todo numero par é divisivel por 2 sem resto

// c) nenhum numero impar é divisivel por 2 gerando um numero inteiro


// 3.
let idade = Number(prompt("digite sua idade"))
let idadeEmMeses = idade * 12
let idadeEmDias = idade * 365
let idadeEmHoras = idade * 8760 


// 4.

let primeiroNumero = Number(prompt("digite o primeiro número"))
let segundoNumero = Number(prompt("digite o segundo número"))

let resto1 = primeiroNumero % segundoNumero
let resto2 = segundoNumero % primeiroNumero
let divisivel1 = resto1 === 0
let divisivel2 = resto2 === 0

console.log("O primeiro numero é maior que segundo?", primeiroNumero > segundoNumero )
console.log("O primeiro numero é igual ao segundo?", primeiroNumero === segundoNumero )
console.log("O primeiro numero é divisível pelo segundo?", divisivel1 )
console.log("O segundo numero é divisível pelo primeiro?", divisivel2 )



// DESAFIO

// 1. a)

let farParaKel = (77 - 32) * (5 / 9) + 273.15
console.log(farParaKel,"K")

// b)
let celParaFar = 80 * (9 / 5) + 32
console.log(celParaFar,'°C')

// c)
let celcius = 30
let far = celcius * (9 / 5) + 32
let kel = (far - 32) * (5 / 9) + 273.15
console.log(far, '°F e', kel, 'K')

// d)
let celcius = Number(prompt("Insira o valor em Celcius"))
let far = celcius * (9 / 5) + 32
let kel = (far - 32) * (5 / 9) + 273.15
console.log(far, '°F e', kel, 'K')



// 2. a)
let quilowatt = Number(prompt("Insira quantos Quilowatts foram consumidos"))
let valor = quilowatt * 0.05
console.log("A residencia deve pagar", valor)
// R$ 14,00 por 280 quilowatts

//b)
let desconto = valor * 0.85
console.log("o valor com 15% de desconto é de:", desconto)



// 3)