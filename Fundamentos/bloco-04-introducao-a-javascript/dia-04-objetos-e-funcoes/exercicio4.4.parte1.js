// Objeto 1

let info = [ 
    {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
    },

    {personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim'    
    } 
];
  
console.log('Bem-vinda, ' + info[0].personagem)
console.log(info[0]);

for(key in info[0]){
    console.log(key);
}

for(key in info[0]){
    console.log(info[0][key]);
}

for(let i in info[0]){
    if (info[0][i] && info[1][i] == 'Sim'){
        console.log('Ambos reocrrentes');
    } else {
    console.log(info[0][i],"e",info[1][i]);
    }
}

// Objeto 2

let leitor = {
    nome: 'Julia',
    sobrenome: 'Pessoa',
    idade: 21,
    livrosFavoritos: [
      {
        titulo: 'O Pior Dia de Todos',
        autor: 'Daniela Kopsch',
        editora: 'Tordesilhas',
      },
      {
        titulo: 'Harry Potter e o Prisioneiro de Azkaban',
        autor: 'JK Rowling',
        editora: 'Rocco',
      }
    ],
  };

  console.log('O livro favorito de', leitor.nome, leitor.sobrenome, 
  'se chama', leitor['livrosFavoritos'][0]['titulo']);
  console.log(leitor.nome, 'tem', leitor.livrosFavoritos.length, 
  'livros favoritos');