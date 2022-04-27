/* EXERCICIO DE INTERPRETAÇÃO
1. a) o primeiro valor da chave "elenco", o ultimo valor da chave "elenco", o segundo valor da chave "transmissoesHoje", considerando que são arrays

2. a) 
nome: "Juca", idade: 3, raca: "SRD"
nome: "Juba", idade: 3, raca: "SRD"
nome: "Jubo", idade: 3, raca: "SRD"

b) a sintaxe faz referencia a um objeto ja existente, permitindo alterá-lo

*/


//EXERCÍCIO DE ESCRITA DE CÓDIGO
// 1.a)
const meuGato = {
    nome: "Milk", 
    apelidos: ["Bilgui", "Rocambole do Capeta", "Gato de cocô"]
}

function imprimirNoConsole(nome, apelido) {
const apresentandoMeuGato = `Meu gato se chama ${nome}, mas pode chamar de: ${apelido}`

console.log(apresentandoMeuGato)
}

imprimirNoConsole(meuGato.nome, meuGato.apelidos)

//b)
const novoGato = {
    ...meuGato,
    apelidos: ["Bolota", "Bola", "Catinga"]
}

imprimirNoConsole(novoGato.nome, novoGato.apelidos)


//2. a)
const alguem1 = {
    nome: 'Zé',
    idade: 31,
    profissao: 'Cavaleiro jedi'
}

const alguem2 = {
    nome: 'Alfred',
    idade: 68,
    profissao: 'Mordomo'
}

//b)
function detalhesDeAlguem(nome, idade, profissao){
const arrayDeAlguem1 = [nome, nome.length, idade, profissao, profissao.length]

console.log(arrayDeAlguem1)
}

detalhesDeAlguem(alguem1.nome, alguem1.idade, alguem1.profissao)

//3. a)

const carrinho = []

const fruta1 = {
    nome: 'morango',
    disponibilidade: true,
}

const fruta2 = {
    nome: 'laranja',
    disponibilidade: true,
}

const fruta3 = {
    nome: 'banana',
    disponibilidade: true,
}

// b)

//vou fazer o PR do exercicio incompleto, pois não tive tempo de resolver :(