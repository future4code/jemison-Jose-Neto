enum setores {
    FIN = 'financeiro',
    MKT  = 'marketing',
    VEN = 'vendas',
}

type funcionario = {
    name: string,
    salario: number,
    setor: setores,
    presencial: boolean
}


const listaFuncionarios = [
	{ nome: "Marcos", salário: 2500, setor: setores.MKT, presencial: true },
	{ nome: "Maria" ,salário: 1500, setor: setores.VEN, presencial: false},
	{ nome: "Salete" ,salário: 2200, setor: setores.FIN, presencial: true},
	{ nome: "João" ,salário: 2800, setor: setores.MKT, presencial: false},
	{ nome: "Josué" ,salário: 5500, setor: setores.FIN, presencial: true},
	{ nome: "Natalia" ,salário: 4700, setor: setores.VEN, presencial: true},
	{ nome: "Paola" ,salário: 3500, setor: setores.MKT, presencial: true }
]



const filtroDeFuncionarios = listaFuncionarios.filter((entrada) => {
    return entrada.presencial === true && entrada.setor === setores.MKT
})

console.table(filtroDeFuncionarios)