const fs = require('fs').promises;
const path = require('path');

async function readJSON() {
  try {
    const file = await fs.readFile(
      path.resolve(__dirname, '../data.json'),
    );
    return JSON.parse(file);
  } catch (err) {
    console.error(err.message);
  }
}

async function writeJSON(file) {
  try {
    await fs.writeFile('../data.json', JSON.stringify(file));
  } catch (err) {
    console.error(err.message);
  }
}

module.exports = {
  readJSON,
  writeJSON,
};