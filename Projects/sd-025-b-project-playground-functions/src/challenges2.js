/* eslint-disable max-lines-per-function */
// Desafio 11
// eslint-disable-next-line complexity
function generatePhoneNumber(numero) {
  // seu código aqui
  let count = [];

  if (numero.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < numero.length; i += 1) {
    count.push(0);
    for (let j = 0; j < numero.length; j += 1) {
      if (numero[i] === numero[j]) {
        count[i] += 1;
      }
    }
    if (numero[i] < 0 || numero[i] > 9 || count[i] > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let a = numero.join('');
  return '(' + a.slice(0, 2) + ') ' + a.slice(2, 7) + '-' + a.slice(7, 11);
}

// Desafio 12
// eslint-disable-next-line complexity
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if (lineA > lineB + lineC || lineB > lineA + lineC || lineC > lineA + lineB) {
    return false;
  } return true;
}

// Desafio 13
function hydrate(phrase) {
  // seu código aqui
  let reg = /\d+/g;
  let result = phrase.match(reg);
  let n = 0;

  if (result.length === 1) {
    return result[0] + ' copo de água';
  }
  for (let i = 0; i < result.length; i += 1) {
    n += parseInt(result[i]);
  }
  return n + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
