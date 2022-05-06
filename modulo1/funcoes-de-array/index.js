/* EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO

1.a)
um novo array sendo uma cópia completa do array "usuarios" será impressa no console

2.a)
um novo array apenas com as informações dos nomes do array "usuarios"

3.a)
um novo array apenas os dois primeiros elementos do array "usuarios"

*/


// EXERCÍCIO DE ESCRITA DE CÓDIGO

 //1.
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 
//a)
const nomeDoguinhos = pets.map((nomeDoDog) => {
    const nome = nomeDoDog.nome
    return nome
})
console.log(nomeDoguinhos)

//b)
const nomeSalsicha = pets.filter((nomeDoDog) => {
    return nomeDoDog.raca === 'Salsicha'
})
console.log(nomeSalsicha)

//c)
const filtroPoodles = pets.filter((poodles) =>{
    return poodles.raca === 'Poodle'
})

const mensagemPoodles = filtroPoodles.map ((nomePoodle) => {
const frase = `Você ganhou um cupom de desconto de 10% para tosar o/a ${nomePoodle.nome}!`

    return frase
}) 
console.log(mensagemPoodles)

//2.
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

//a)
const nomeProduto = produtos.map((nomeProd) => {
    return nomeProd.nome
})
console.log(nomeProduto)

//b)
const nomePrecoDesconto = produtos.map((nomeProd) => {
    return {nome: nomeProd.nome, preco:(nomeProd.preco * 0.95).toFixed(2)}
})
console.log(nomePrecoDesconto)

//c)

const bebida = produtos.filter((itemBebida) => {
    return itemBebida.categoria === 'Bebidas'
})
console.log(bebida)

//d)
const ype = produtos.filter((nomeYpe) => {
   return nomeYpe.nome.includes('Ypê')
    })
console.log(ype)

//e)
const mensagemYpe = ype.map((nomeYpe) => {
    const fraseCompre = `Compre ${nomeYpe.nome} por ${nomeYpe.preco}`
    return fraseCompre
})
console.log(mensagemYpe)
 

// DESAFIO

//1.
const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
 ]

//a)

const nomePkm = pokemons.map((nomes) => {

   const ArrayNomesPkm = nomes.nome
  
    return ArrayNomesPkm
})

const pkmOrdem = nomePkm.sort()
console.log(pkmOrdem)

//b)
const apenasTipos = pokemons.map((tipos) => {
    return tipos.tipo
})

const tiposSemRepeticao = [... new Set(apenasTipos)]

console.log(tiposSemRepeticao)