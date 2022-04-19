

// uma variável sem valor é do tipo undefined


let idadeDoUsuario = prompt("Qual é a sua idade?");
const nomeDoUsuario = prompt("Qual é o seu nome?")

console.log(typeof idadeDoUsuario)
console.log(typeof nomeDoUsuario)

// prompt só gera variáveis tipo string

console.log("Olá", nomeDoUsuario, ", você tem", idadeDoUsuario, "anos")


// segunda questão
let bolacha = prompt("Você comeu bolacha hoje?");
let niver = prompt("Hoje é seu aniversário?");
let bolo = prompt("Você gosta de bolo?");

console.log("Você comeu bolacha hoje? -", bolacha)
console.log("Hoje é seu aniversário? -", niver)
console.log("Você gosta de bolo? -", bolo)


// terceira questão
let a = 10
let b = 25
let c = a

a = b
b = c


console.log("O novo valor de a é", a) // O novo valor de a é 25
console.log("O novo valor de b é", b) // O novo valor de b é 10




// desafio abaixo (só consegui resolver com o comando de parseInt)
let primeiroNumero = prompt("Digite o primeiro número");
let segundoNumero = prompt("Digite o segundo número");

const converterPrimeiro = parseInt(primeiroNumero);
const converterSegundo = parseInt(segundoNumero);

let soma = converterPrimeiro + converterSegundo
let mult = converterPrimeiro * converterSegundo

console.log("O primeiro número somado ao segundo número resulta em:", soma)
console.log("O primeiro número multiplicado pelo segundo número resulta em:", mult)