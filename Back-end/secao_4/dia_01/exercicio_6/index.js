const { resolve } = require('path');

const fs = require('fs').promises;

async function getAllChar() {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    JSON.parse(data).forEach((char) => console.log(`${char.id} - ${char.name}`))
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

async function getCharById(id) {
  const promise = new Promise(async (resolve, reject) => {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const char = JSON.parse(data).find((char) => Number(char.id) === id)
    if(!char) {
      reject(new Error(`Não encontrado.`));
    } 
    resolve(char)
  })
  
  return promise
}

async function deleteChars10and6() {
  const promise = new Promise(async (resolve, reject) => {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const char = JSON
      .parse(data)
      .filter((char) => Number(char.id) !== 10 && Number(char.id) !== 6)
    if(!char) {
      reject(new Error(`Não eliminados.`));
    } 
    await fs.writeFile('./simpsonsDeleted.json', JSON.stringify(char))
    resolve(char)
  })
  
  return promise
}

getAllChar()
getCharById(3)
  .then(result => console.log(result))
  .catch(err => console.log(err.message))
deleteChars10and6()
  .then(result => console.log(result))