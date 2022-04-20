/* exercicio de interpretação de código
1.
a. undefined
b. null
c. 11
d. 3
e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f. vi que a resposta é "9" mas não entendi o motivo

2.
a frase digitada no prompt será toda convertida em maiúsculo, com as letras A substituidas pela letra I e, por ultimo, a quantidade de caracteres na frase

*/

// 1.
const emailDoUsuario = prompt("digite seu email")
const nomeDoUsuario = prompt("digite seu nome")

console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)


// 2. a)
const arrayComidas = ["bolo", "pizza", "ramen", "gyoza", "chocolate"]
console.log(arrayComidas)

// b)

console.log("Essas são minhas comidas preferidas:")
console.log(arrayComidas[0])
console.log(arrayComidas[1])
console.log(arrayComidas[2])
console.log(arrayComidas[3])
console.log(arrayComidas[4])

// c)
const novaComida = prompt("qual a sua comida preferida?")
arrayComidas[1] = novaComida
console.log(arrayComidas)

// 3.

const tarefa1 = prompt("qual a primeira tarefa?")
const tarefa2 = prompt("qual a segunda tarefa?")
const tarefa3 = prompt("qual a terceira tarefa?")
let listaDeTarefas = [tarefa1, tarefa2, tarefa3]
console.log(listaDeTarefas)

const tarefaRealizada = prompt("difite o indice da tarefa que já realizou de 0 a 2")
listaDeTarefas.splice(tarefaRealizada, 1)
console.log(listaDeTarefas)

// DESAFIO
//1.

const frase = prompt("digite sua frase para converter em array")
const array = frase.split(" ")
console.log(array)

//2.
const arrayFrutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"]
const busca = arrayFrutas.indexOf("Abacaxi")
console.log(busca)