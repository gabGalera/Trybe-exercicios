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

let teste = [2, 3, 6, 7, 10, 1];

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

console.log(indiceMaior(teste));

//Resquisito 3

teste = [2, 4, 6, 7, 10, 0, -3];

function indiceMenor(entry) {
    let menor = 0;
    let index = 0;
    for(i = 0; i < entry.length; i++){     
        if(entry[i] < menor){
            maior = entry[i];
            index = i
        }
    }
    return index
}

console.log(indiceMenor(teste));

