ˋˋˋfunction contaOcorrencias(arrayDeNumeros, numeroEscolhido) {
 let qtdd = 0
  for (let s of arrayDeNumeros) {
    if (s === numeroEscolhido)
    qtdd++
    }
    if(qtdd === 0){
      return 'Número não encontrado'
    } else {
return `O número ${numeroEscolhido} aparece ${qtdd}x`
    }  
}ˋˋˋ