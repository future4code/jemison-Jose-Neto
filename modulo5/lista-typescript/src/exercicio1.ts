function recebeNomeEData (nome : string, data : string) :string {

    
    let dataEmArray = data.split("/")
    

    
    
    const frase = `Olá me chamo ${nome}, nasci no dia ${dataEmArray[0]} do mês de ${dataEmArray[1]} do ano de ${dataEmArray[2]} `





    return frase
}   

console.log(recebeNomeEData('ze', '27/03/1991'));
