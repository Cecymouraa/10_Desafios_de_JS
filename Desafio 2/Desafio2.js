//Descrição: Peça um número e informe se ele é par ou ímpar.
//Objetivo:
//Usar operador % (resto da divisão)
//Estrutura de decisão (if/else)

let numero= parseFloat(prompt("Digite um número:"));

if (numero % 2 === 0) {
    alert("O número " + numero + " é PAR.");
} else {
  alert("O número " + numero + " é ÍMPAR.");
}
