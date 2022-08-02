
let n = 10;
let fat = 1;

fato = function(n){
    
    for(i = 1; i <= n; i += 1){
    fat = fat*i
    }
    return fat  
}

f = fato(n);

console.log(f);

let word = "Je ne sais pas";
let inv = "";

for(i = 0; i < word.length; i++){
    inv = inv + word[word.length - i -1] 
}

console.log(inv);

let array = ['java', 'javascript', 'python', 'html', 'css'];
let letter = 0;
word = "";
let a = "";

for(i = 0; i < array.length; i++){
    a = array[i]
    if(a.length > letter){
        letter = a.length
        word = a
    }
}

console.log("Maior palavra:", word);

for(i = 0; i < array.length; i++){
    a = array[i]
    if(a.length < letter){
        letter = a.length
        word = a
    }
}

console.log("Menor palavra:", word);

n = 2;
let primo = [];
let count = 0;

for(i = 2; i <= 50; i++){
    n = i;
    for(j = 2; j <= n; j++){
        if(n % j == 0){
            count += 1
        } 
    }
    if(count == 1){
        primo = n
    }
    count = 0
}
 console.log(primo)