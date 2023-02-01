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

async function simpsonFamily() {
  const promise = new Promise(async (resolve, reject) => {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const char = JSON
      .parse(data)
      .filter((char) => Number(char.id) === 1 || Number(char.id) === 2 || Number(char.id) === 3 || Number(char.id) === 4)
    if(!char) {
      reject(new Error(`Deu ruim.`));
    } 
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(char))
    resolve(char)
  })
  
  return promise
}

async function simpsonFamilyWithNelson() {
  const promise = new Promise(async (resolve, reject) => {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const char = JSON
      .parse(data)
      .filter((char) => Number(char.id) === 1 || Number(char.id) === 2 || Number(char.id) === 3 || Number(char.id) === 4 || char.name === 'Nelson Muntz')
    if(!char) {
      reject(new Error(`Deu ruim.`));
    } 
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(char))
    resolve(char)
  })
  
  return promise
}

async function simpsonFamilyWithMaggie() {
  const promise = new Promise(async (resolve, reject) => {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    const char = JSON
      .parse(data)
      .filter((char) => Number(char.id) === 1 || Number(char.id) === 2 || Number(char.id) === 3 || Number(char.id) === 4 || char.name === 'Maggie Simpson')
    if(!char) {
      reject(new Error(`Deu ruim.`));
    } 
    await fs.writeFile('./simpsonFamily.json', JSON.stringify(char))
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
simpsonFamily()
simpsonFamilyWithNelson()
simpsonFamilyWithMaggie()