/* EXERCÍCIO DE INTERPRETAÇÃO DE CÓDIGO
1.
-ele determina que a variável "valor" é 0
-cria um laço onde o valor de i começa como 0, determina que o laço vai "rodar" até que i seja menor que 5 e que ao fim de cada repetição, seja somado mais 1 ao valor de i
-determina o comando do loop como a variável "valor" sendo igual ao seu valor mais o valor de i
-ao fim do último ciclo, será impresso o valor da variável "valor"

2.a)
todos os números do array que forem maiores que 18

b)

3.


*/

//EXERCÍCIO DE ESCRITOA DE CÓDIGO


//1.
 
const bichinhosUsuario = Number(prompt('quantos bichinhos vc tem?'))
const listaDeNomes = []


 if (bichinhosUsuario === 0){
 console.log('Que pena! Você pode adotar um pet!')   
} else {
    let quantidadeBichinhos = 1

    while(quantidadeBichinhos <= bichinhosUsuario) {    
    let nomeDoBichinho = prompt('digite o nome do seu bchinho')   
    listaDeNomes.push(nomeDoBichinho) 
    quantidadeBichinhos++

    console.log(listaDeNomes)
    }
}
 

//2.
const arrayOriginal = [10, 21, 32, 45, 50, 67]

//a)
for(imprimir of arrayOriginal){
    console.log(imprimir)
}

//b)
for(imprimirEDividir of arrayOriginal){
    console.log(imprimirEDividir / 10)
}

//c)
const novoArray = []
for (Numpares of arrayOriginal){
    if(Numpares % 2 === 0){
        novoArray.push(Numpares)
    }
}
console.log(novoArray)

//d.
const arrayStrings = []

for ( let i = 0; i < arrayOriginal.length; i++){
    arrayStrings.push(`O elemento do índex ${i} é ${arrayOriginal[i]}`)
}

console.log(arrayStrings)

//e.
function maiorEMenor (array){
let maiorNumero = 0
let menorNumero = 100

for (let i = 0; i < array.length; i++){
    if (array[i] > maiorNumero){
        maiorNumero = array[i]
    }
}
for (let i = 0; i < array.length; i++) {
    if (array[i] < menorNumero){
        menorNumero = array[i]
    }
}
console.log(`O maior número do array é ${maiorNumero} e o menor é ${menorNumero}`)
}

maiorEMenor(arrayOriginal)