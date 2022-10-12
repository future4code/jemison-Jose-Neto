// exercicio 1

const entrada=process.argv
const novaIdade = Number(entrada[3]) + 7

if(typeof entrada[2] == "undefined") {
    console.log('verifique se preencheu os dois parametros solicitados');
} if(typeof entrada[3] == "undefined"){
    console.log('verifique se preencheu os dois parametros solicitados');
} else{
    console.log(`Olá, ${entrada[2]}! Você tem ${entrada[3]} anos. Em sete anos você terá ${novaIdade}`)
}

