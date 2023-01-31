const readline = require('readline-sync');

const peso = readline.questionFloat('What is your weight? ')
const altura = readline.questionFloat('What is your height? ');
const IMC = peso / (altura^2);

console.log(IMC);