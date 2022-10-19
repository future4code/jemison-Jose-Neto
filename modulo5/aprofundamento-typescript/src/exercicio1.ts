//a)
//caso eu nao atribua um valor de string na variavel em que tipada como string, sempre aparecerá erro
const minhaString: string = 'ddd'

//b)
//nos casos de variaveis que podem assumir mais de um tipo de valor usamos as union types
const meuNumero : number | string = 'ddd'

//c) e d)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum CorFavorita {
    VERMELHA = 'vermelha',
    LARANJA = 'laranja',
    AMARELA = 'amarela',
    VERDE = 'verde',
    AZUL = 'azul',
    AZULESCURO = 'azul-escuro',
    VIOLETA = 'violeta'
}

const pessoa1 : Pessoa = {
    nome : 'zé',
    idade: 31,
    corFavorita: CorFavorita.AZUL
}

const pessoa2 : Pessoa = {
    nome : 'daniel',
    idade: 24,
    corFavorita: CorFavorita.VIOLETA
}

const pessoa3 : Pessoa = {
    nome : 'ket',
    idade: 20,
    corFavorita: CorFavorita.VERMELHA
}


//d)

