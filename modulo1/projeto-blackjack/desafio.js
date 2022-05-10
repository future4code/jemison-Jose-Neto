/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */
console.log('Boas vindas ao jogo de Blackjack!')

if (confirm("Quer iniciar uma nova rodada?")) {

   let cartaUsuario1 = comprarCarta()
   let cartaUsuario2 = comprarCarta()
   let cartaComputador1 = comprarCarta()
   let cartaComputador2 = comprarCarta()

   const usuario = [cartaUsuario1, cartaUsuario2]
   const computador = [cartaComputador1, cartaComputador2]

   const somaUsuario = cartaUsuario1.valor + cartaUsuario2.valor
   const somaComputador = cartaComputador1.valor + cartaComputador2.valor

   let stringResultado = "O jogo acabou";

   let verificaAsUsuario = true;
   let verificaAsPc = true;

   while (verificaAsUsuario || verificaAsPc) {
      if (cartaUsuario1.valor === cartaUsuario2.valor) {
         if (cartaUsuario1 === 11) {
            cartaUsuario1 = comprarCarta()
            cartaUsuario2 = comprarCarta()
         } else {
            verificaAsUsuario = false
         }
      }
      if (cartaComputador1.valor === cartaComputador2.valor) {
         if (cartaComputador1 === 11) {
            cartaComputador1 = comprarCarta()
            cartaComputador2 = comprarCarta()
         } else {
            verificaAsPc = false;
         }
      }
   }
   
   stringResultado = ((somaUsuario > somaComputador)
      ? "O usuário venceu!"
      : (somaUsuario < somaComputador)
         ? "O computador venceu!"
         : "Empate!");

   console.log(stringResultado);
   console.log(`Usuário - cartas ${cartaUsuario1.texto} ${cartaUsuario2.texto} - ${somaUsuario}`)
   console.log(`Computador - cartas ${cartaComputador1.texto} ${cartaComputador2.texto} - ${somaComputador}`)
}


