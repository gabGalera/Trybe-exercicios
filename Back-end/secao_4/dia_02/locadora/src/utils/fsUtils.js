const fs = require('fs').promises;
const path = require('path');

async function readJSON() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../../movies.json'));
    return JSON.parse(data);
  } catch (err) {
    console.log(`Não deu: ${err.message}`);
  }
}

async function writeJSON(newMovie) {
  try {
    const movieList = await readJSON();
    await fs.writeFile(
      path.resolve(__dirname, '../../movies.json'), 
      JSON.stringify([...movieList, newMovie]),
    );
    console.log('New movie added!');
  } catch (err) {
    console.log(`Não deu: ${err.message}`);
  }
}

module.exports = { readJSON, writeJSON };
