// Dada uma matriz, transforme em um array.

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];
  
  function flatten(entry) {
    // escreva seu código aqui
    const report = entry.reduce( (acc, curr) => acc.concat(curr) );
    
    console.log(report);
} 
  

  flatten(arrays)