/* eslint-disable complexity */
// Desafio 1

function compareTrue(B0, B1) {
  // seu código aqui
  if (B0 && B1) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(word) {
  // seu código aqui
  let split = [];
  let spaceindex = [];

  for (let i = 0; i < word.length; i += 1) {
    if (word[i] === ' ') {
      spaceindex.push(i);
    }
  }

  split.push(word.slice(0, spaceindex[0]));

  for (let j = 1; j <= spaceindex.length; j += 1) {
    split.push(word.slice(spaceindex[j - 1] + 1, spaceindex[j]));
  }
  return split;
}

// Desafio 4
function concatName(entry) {
  // seu código aqui
  let a = [];
  a.push(entry[entry.length - 1]);
  a.push(entry[0]);
  return a.join(', ');
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return wins * 3 + ties;
}

// Desafio 6
function refat1(entry, maior) {
  let b = 0;
  for (let i = 0; i < entry.length; i += 1) {
    if (entry[i] === maior) {
      b += 1;
    }
  }
  return b;
}
function highestCount(entry) {
  // seu código aqui
  let maior = entry[0];
  for (let i = 0; i < entry.length; i += 1) {
    if (maior < entry[i]) {
      maior = entry[i];
    }
  }
  let a = refat1(entry, maior);
  return a;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);

  if (dist1 > dist2) {
    return 'cat2';
  } if (dist2 > dist1) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numeros) {
  // seu código aqui
  let a = [];

  for (let i = 0; i < numeros.length; i += 1) {
    if (numeros[i] % 3 === 0 && numeros[i] % 5 === 0) {
      a.push('fizzBuzz');
    } else if (numeros[i] % 3 === 0) {
      a.push('fizz');
    } else if (numeros[i] % 5 === 0) {
      a.push('buzz');
    } else {
      a.push('bug!');
    }
  }
  return a;
}

// Desafio 9
function encode(word) {
  // seu código aqui
  let a = word;
  for (let i = 0; i < word.length; i += 1) {
    a = a.replace('a', '1');
    a = a.replace('e', '2');
    a = a.replace('i', '3');
    a = a.replace('o', '4');
    a = a.replace('u', '5');
  }
  return a;
}

function decode(word) {
  // seu código aqui
  let a = word;
  for (let i = 0; i < word.length; i += 1) {
    a = a.replace('1', 'a');
    a = a.replace('2', 'e');
    a = a.replace('3', 'i');
    a = a.replace('4', 'o');
    a = a.replace('5', 'u');
  }
  return a;
}

// Desafio 10
function techList(tech, names) {
  // seu código aqui
  let a = [];
  let b = tech.sort();

  for (let i = 0; i < b.length; i += 1) {
    let obj = {
      tech: '',
      name: '',
    };
    obj.tech = b[i];
    obj.name = names;
    a.push(obj);
  }
  if (b.length === 0) {
    return 'Vazio!';
  } return a;
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
