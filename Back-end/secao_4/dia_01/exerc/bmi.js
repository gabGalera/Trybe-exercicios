const readline = require('readline-sync');

const peso = readline.questionFloat('What is your weight? ')
const altura = readline.questionFloat('What is your height? ');
const IMC = peso / (altura ** 2);
let category = '';

switch(IMC) {
  case IMC < 18.5:
    category = 'Abaixo do peso'
    break
  case IMC < 24.9:
    category = 'Peso normal'
    break
  case IMC < 29.9:
    category = 'Acima do peso'
  case IMC < 34.9:
    category = "Obesidade grau 1"
  case IMC < 39.9:
    category = "Obesidade grau 2"
  default:
    category = "Obesidade grau 3 e 4"
}

console.log(`Parabéns! Seu IMC é ${IMC} e seu status é: ${category}`);