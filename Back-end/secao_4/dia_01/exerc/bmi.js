const readline = require('readline-sync');

function calcIMC(peso, altura) {
  return peso / (altura ** 2);
}

function main() {
  const IMC = calcIMC(
    readline.questionFloat('What is your weight? '), 
    readline.questionFloat('What is your height? ')
    ); 
  console.log(IMC)
  console.log(`Seu IMC é ${IMC}`);
  
    if(IMC < 18.5) {
      console.log('Abaixo do peso')

    }
    if(IMC < 24.9 && IMC >= 18.5){
      console.log('Peso normal')

    }
    if(IMC < 29.9 && IMC >= 24.9){
      console.log('Acima do peso')

    }
    if(IMC < 34.9 && IMC >= 29.9){
      console.log("Obesidade grau 1")

    }
    if(IMC < 39.9 && IMC >= 34.9){
      console.log("Obesidade grau 2")

    }
    if(IMC >= 40){
      console.log("Obesidade grau 3 e 4")

    }
  
}

main();