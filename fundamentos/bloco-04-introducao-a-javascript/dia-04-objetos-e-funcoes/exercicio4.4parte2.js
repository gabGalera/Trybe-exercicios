// Requisito 1

// let word = 'Gabriel';

// function verificaPalindrome(entry) { 
//     let palindromo = '';
//     let j = entry.length;
//     for(i = 0; i < j; i++){
//         palindromo = palindromo + entry[j-i-1];
//     }
//     if(palindromo == entry){
//         return true
//     } else {
//         return false
//     }
// }

// palindromo = verificaPalindrome(word);

// console.log(palindromo);

// Requisito 2

// let teste = [2, 3, 6, 7, 10, 1];

function indiceMaior(entry) {
    let maior = 0;
    let index = 0;
    for(i = 0; i < entry.length; i++){     
        if(entry[i] > maior){
            maior = entry[i];
            index = i
        }
    }
    return index
}

// console.log(indiceMaior(teste));

// //Resquisito 3

// teste = [2, 4, 6, 7, 10, 0, -3];

// function indiceMenor(entry) {
//     let menor = 0;
//     let index = 0;
//     for(i = 0; i < entry.length; i++){     
//         if(entry[i] < menor){
//             maior = entry[i];
//             index = i
//         }
//     }
//     return index
// }

// console.log(indiceMenor(teste));

// Requisito 4

// let testeS = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

// function maisCaracteres(entry){
//     let maiorC = '';
//     for(i = 0; i < entry.length; i++){
//         if(entry[i].length > maiorC.length){
//             maiorC = entry[i]
//         }
//     }
//     return maiorC
// }  

// console.log(maisCaracteres(testeS));

// Requisito 5

let teste5 = [2, 3, 2, 5, 8, 2, 3];

function mediana(entry){
    let count = [];
    for(i = 0; i < entry.length; i++){
        count.push(0);
        for(j = 0; j < entry.length; j++){
            if(entry[i] == entry[j]){
                count[i] = count[i] + 1 
            }
        }
    }

    index = indiceMaior(count);
    return entry[index]
}

console.log(mediana(teste5));
