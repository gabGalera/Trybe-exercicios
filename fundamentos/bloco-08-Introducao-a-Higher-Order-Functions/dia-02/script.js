const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

  // Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

const authorBornIn1947 = (entry) => entry.find( (entry) => entry.author.birthYear === 1947).author.name

// console.log(authorBornIn1947(books));

// Retorne o nome do livro de menor nome.

function smallerName(entry) {
    let nameBook;
    // escreva aqui o seu código
    nameBook = entry.sort((a, b) => a.name.length > b.name.length ? 1 : -1)[0].name
    // Variável nameBook que receberá o valor do menor nome;
    return nameBook;
  }

// console.log(smallerName(books));

// Encontre o primeiro livro cujo nome possui 26 caracteres.

function getNamedBook(entry) {
    // escreva seu código aqui
    return entry.find( (entry) => entry.name.length === 26)
  }

// console.log(getNamedBook(books));

// Ordene os livros por data de lançamento em ordem decrescente.

function booksOrderedByReleaseYearDesc(entry) {
    // escreva aqui seu código
    return entry.sort((a, b) => a.releaseYear > b.releaseYear ? -1 : 1)
  }

// console.log(booksOrderedByReleaseYearDesc(books));

// Faça uma função que retorne true, se todas as pessoas autoras nasceram no século XX, ou false, caso contrário.

function everyoneWasBornOnSecXX(entry) {
  // escreva seu código aqui
    return entry.every( (entry) => entry.author.birthYear > 1900 && entry.author.birthYear < 2001)
}

// console.log(everyoneWasBornOnSecXX(books));

// Faça uma função que retorne true, se algum livro foi lançado na década de 80, e false, caso contrário.

function someBookWasReleaseOnThe80s(entry) {
    // escreva seu código aqui
    return entry.some( (entry) => entry.releaseYear > 1980 && entry.releaseYear < 1991)
}

// console.log(someBookWasReleaseOnThe80s(books));

// Faça uma função que retorne true, caso nenhum author tenha nascido no mesmo ano, e false, caso contrário.

function authorUnique(entry) {
    // escreva seu código aqui
    let a = [];
    let c = [];
    entry.forEach(element => a.push(element.author.birthYear));
    a.sort((a, b) => {
        (a - b === 0) ? c = true : false;       
    })
    return c;
}

console.log(authorUnique(books));
 