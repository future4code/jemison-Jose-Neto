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
    
    let resultado = []

    if (typeof input !== "number"){
        return `Erro. Parâmetro inválido (deve ser um número)`
    }
    if (input > 10){
        return `Erro. Parâmetro inválido (número precisa valer entre 1 e 10)`
    }
    
    for (let i = 0; i <= 10; i++){
        resultado.push(`${input} x ${i} = ${input * i}`)
    }

return resultado
}


console.log(tabuada(5));