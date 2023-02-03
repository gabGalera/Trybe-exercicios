const fs = require('fs').promises;
const path = require('path');

async function readJSON() {
  try {
    const data = await fs.readFile(path.resolve(__dirname, '../../movies.json'));
    console.log(JSON.parse(data));
    return JSON.parse(data);
  } catch (err) {
    console.log(`Não deu: ${err.message}`);
  }
}

readJSON();

// export default readJSON;
