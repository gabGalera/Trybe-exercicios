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

  // Crie um array com strings no formato NOME_DO_LIVRO - GÊNERO_DO_LIVRO - NOME_DA_PESSOA_AUTORA

  function formatedBookNames(entry) {
    // escreva seu código aqui
    return entry.map((entry) => `${entry.name} - ${entry.genre} - ${entry.author.name}`)
  }

//   console.log(formatedBookNames(books));

// 2 - Construa um array de objetos a partir do array de livros. Cada objeto deve conter uma propriedade author, com o nome da pessoa autora do livro, e uma propriedade age com a idade dessa pessoa quando o livro foi lançado. O array deve ser ordenado por idade, ou seja, da pessoa mais jovem para a mais velha considerando suas idades quando o livro foi lançado.

function nameAndAge(entry) {
    // escreva seu código aqui
    let a = entry.map( (element) => ({
        'age': element.releaseYear - element.author.birthYear,
        'author': element.author.name,
    }) )
    a.sort((a, b) => a.age - b.age)
    return a
}

//   console.log(nameAndAge(books));

//  Crie um array com todos os objetos que possuem gênero ficção científica ou fantasia.

function fantasyOrScienceFiction(entry) {
    // escreva seu código aqui
    return entry.filter( (entry) => entry.genre === 'Ficção Científica' || entry.genre ===  'Fantasia')
  }

//   console.log(fantasyOrScienceFiction(books));

// Crie um array formado pelos livros com mais de 60 anos desde sua publicação. Esse array deve ser ordenado do livro mais velho ao mais novo.

function oldBooksOrdered(entry) {
    // escreva seu código aqui
    let a = entry.filter( (entry) => 2022 - entry.releaseYear > 60)
    return a.sort( (a, b) => a.releaseYear - b.releaseYear)
  }

//   console.log(oldBooksOrdered(books));

// Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

function fantasyOrScienceFictionAuthors(entry) {
    // escreva seu código aqui
    let a = fantasyOrScienceFiction(entry)
    return a.map( (entry) => entry.author.name).sort()
    
  }

//   console.log(fantasyOrScienceFictionAuthors(books));

// Crie um array com o nome de todos os livros com mais de 60 anos de publicação.

function oldBooks(entry) {
    // escreva seu código aqui
    let a = oldBooksOrdered(entry)
    return a.map( entry => entry.name)
  }

//   console.log(oldBooks(books));

//   Encontre o nome do livro escrito pela pessoa cujo nome registrado começa com três iniciais.

function authorWith3DotsOnName(entry) {
    // escreva seu código aqui
    let a = entry.map( (entry, index) => ({
        'name': entry.author.name, 
        'dots': entry.author.name.split('. ').length - 1,
        'book': entry.name
    }))
    a = a.filter( entry => entry.dots === 3)
    return a.map( entry => entry.book)
}

  console.log(authorWith3DotsOnName(books));