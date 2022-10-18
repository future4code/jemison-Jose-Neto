console.log("exercicio 3");

const contas = [
	{
		email: "astrodev@labenu.com",
		password: "abc123"
	},
	{
		email: "bananinha@gmail.com",
		password: "bananinha"
	}
]

const addConta=(usuario, senha)=>{

    const novaConta = {
        email: usuario,
        password: senha
        }

    if ( typeof usuario !== 'e-mail' ) {
        return console.log('');
    }

    
    contas.push(novaConta)
    return contas
}


console.log(addConta('abigegegegee', 'vrum'));