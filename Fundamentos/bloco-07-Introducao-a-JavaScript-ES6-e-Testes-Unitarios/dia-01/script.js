 /* 
  🚀 Altere o tipo das variáveis(var) para let ou const para que respeitem o escopo em que foram declaradas, e altere a função utilizando arrow function e template literals.
    
  Modifique a estrutura da função para que ela seja uma arrow function;
    
    Modifique as variáveis para que respeitem o escopo onde estão declaradas;
    
    Modifique as concatenações para template literals.
  */

const testingScope = (escopo) => {
    if (escopo === true) {
      let ifScope = `Não devo ser utilizada fora do meu escopo (if)`;
      ifScope = `${ifScope} ótimo, fui utilizada no escopo !`;
      console.log(ifScope);
    } else {
      let elseScope = `Não devo ser utilizada fora meu escopo (else)`;
      console.log(elseScope);
    }
    // console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
  }

testingScope(true);

/* 
Crie uma função que faça com que o array oddsAndEvens fique em ordem crescente;

Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne a frase "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

Bônus (opcional): tente fazer o mesmo exercício utilizando o método array.sort(). Spoiler: É possível realizar uma função que ordene qualquer array de números.
*/
  

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortOddsAndEvens = () => {

    for(let j = 0; j < oddsAndEvens.length; j += 1) {
        for(let i = 0; i < oddsAndEvens.length - j; i += 1) {
            if(oddsAndEvens[i] > oddsAndEvens[i + 1]) {
                let a = oddsAndEvens[i]
                oddsAndEvens[i] = oddsAndEvens[i + 1]
                oddsAndEvens[i + 1] = a
            }
        } 
    }
};

sortOddsAndEvens();

console.log(`Os números ${oddsAndEvens} se encontram ordenados de forma crescente!`); // será necessário alterar essa linha 😉  
