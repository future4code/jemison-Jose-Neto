console.log("exercício 2");


let clientes = [
	{ id: 1, nome: 'Fulano' },
	{ id: 2, nome: 'Ciclano' },
	{ id: 3, nome: 'Beltrano' },
	{ id: 4, nome: 'Fulana' }
]

const addClient =(newName)=>{

    let novoId = clientes.length + 1
    let novoItem = { id: novoId , nome: newName}
    clientes.push(novoItem)

    return clientes

}

console.log(addClient('zé'))


const tabuada=(input)=>{
    
    let resultado

    if (input = !Number){
        resultado = `Erro. Parâmetro inválido (deve ser um número)`
    } else if (input > 10){
        resultado = 'Erro. Parâmetro inválido (número precisa valer entre 1 e 10)'
    } else     
        resultado =[
        `${input} x 0 = ${input * 0}`,
        `${input} x 1 = ${input * 1}`,
        `${input} x 2 = ${input * 2}`,
        `${input} x 3 = ${input * 3}`,
        `${input} x 4 = ${input * 4}`,
        `${input} x 5 = ${input * 5}`,
        `${input} x 6 = ${input * 6}`,
        `${input} x 7 = ${input * 7}`,
        `${input} x 8 = ${input * 8}`,
        `${input} x 9 = ${input * 9}`,
        `${input} x 10 = ${input * 10}`,
	]

return resultado
}

console.log(tabuada(20));