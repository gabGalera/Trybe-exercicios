// Requisito 1

let word = 'Gabriel';
let palindromo = '';

function verificaPalindrome(entry) { 
    let j = entry.length;
    for(i = 0; i < j; i++){
        palindromo = palindromo + entry[j-i-1];
    }
    if(palindromo == entry){
        return true
    } else {
        return false
    }
}

palindromo = verificaPalindrome(word);

console.log(palindromo);

// Requisito 2

