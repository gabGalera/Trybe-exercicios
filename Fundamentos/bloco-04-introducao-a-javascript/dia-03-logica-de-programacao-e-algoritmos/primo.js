let n = 15;
let a = 0; 

for(i = 2; i <= n; i++){
    if(n % i == 0){
        a = a + 1;
    }
}

if(a == 1){
    console.log('É primo');
} else {
    console.log('Não é primo');
}