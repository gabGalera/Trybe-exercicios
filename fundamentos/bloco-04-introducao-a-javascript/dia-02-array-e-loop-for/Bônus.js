let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
}

console.log(numbers);


for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
}

console.log(numbers);

numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(i = 0; i < numbers.length; i++){
  j = i+1;
  if(j == numbers.length){
    numbers[i] = numbers[i]*2;
  } else{
    numbers[i] = numbers[i]*numbers[j]
  }
}

console.log(numbers);