const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.

const addNoturno = (obj, chave, turno) => obj[chave] = turno

addNoturno(lesson2, 'turno', 'noite')

console.log(lesson2)

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

const listKeys = (obj) => Object.keys(obj)

console.log(listKeys(lesson2))

// Crie uma função para mostrar o tamanho de um objeto. Essa função deve receber um objeto como parâmetro.

const tamanhoObjeto = (obj) => Object.keys(obj).length

console.log(tamanhoObjeto(lesson2))

// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

const listaObjeto = (obj) => Object.values(obj)

console.log(listaObjeto(lesson2))

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:

const allLessons = Object.assign({}, {lesson1: lesson1}, {lesson2: lesson2}, {lesson3: lesson3})

console.log(allLessons);

/*
{
  lesson1:
   { materia: 'Matemática',
     numeroEstudantes: 20,
     professor: 'Maria Clara',
     turno: 'manhã' },
  lesson2:
   { materia: 'História',
     numeroEstudantes: 20,
     professor: 'Carlos',
     turno: 'noite' },
  lesson3:
   { materia: 'Matemática',
     numeroEstudantes: 10,
     professor: 'Maria Clara',
     turno: 'noite' }
};
*/

// Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const totalAlunos = (turma1, turma2, turma3) => turma1.numeroEstudantes + turma2.numeroEstudantes + turma3.numeroEstudantes;

console.log(totalAlunos(lesson1, lesson2, lesson3));

// Crie uma função que obtenha o valor da chave de acordo com o seu índice no objeto.

const getValueByNumber = (obj, i) => Object.values(obj)[i]

console.log(getValueByNumber(lesson1, 0));

// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave. 

