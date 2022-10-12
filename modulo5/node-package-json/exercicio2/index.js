//exercicio 2

const operacao = process.argv[2]
const primeiroNumero = Number(process.argv[3])
const segundoNumero = Number(process.argv[4])

const som = primeiroNumero + segundoNumero
const sub = primeiroNumero - segundoNumero
const div = primeiroNumero / segundoNumero
const mult = primeiroNumero * segundoNumero

if (operacao === 'som'){
    console.log(`Resposta ${som}` );
} if (operacao === 'sub'){
    console.log(`Resposta ${sub}` );
} if (operacao === 'div'){
    console.log(`Resposta ${div}` );
} if (operacao === 'mult'){
    console.log(`Resposta ${mult}`);
}
