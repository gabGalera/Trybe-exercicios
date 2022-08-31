// Requisito 1

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(let number of numbers){
    console.log(number)
}

// Requisito 2

let soma = 0;

for(let number of numbers){
    soma = soma + number
}

console.log('A soma do vetor é:', soma);

// Requisito 3

let media = soma/numbers.length;

console.log('A média é:', media);

// Requisito 4

if (media > 20){
    console.log('Valor maior do que 20');
} else {
    console.log('Valor menor do que 20');
}

// Requisito 5

let a = numbers[0];

for(let number of numbers){
    if(number > a){
        a = number;
    }
}

console.log('O maior valor é',a);

// Requisito 6

a = 0;

for(let number of numbers){
    if(number % 2 != 0){
        a = a + 1;
    }
}

if(a == 0){
    console.log('Nenhum valor ímpar encontrado')
} else {
    console.log('Existem',a,'ímpares no vetor')
}

// Requisito 7

a = numbers[0];

for(let number of numbers){
    if(number < a){
        a = number;
    }
}

console.log('O menor valor é',a);

// Requisito 8

let array = [];

for(let i = 0; i < 25; i += 1){
    array[i] = i + 1;
    console.log(array[i]);
}

// Requisito 9

for(let i = 0; i < 25; i += 1){
    console.log(array[i]/2);
} 