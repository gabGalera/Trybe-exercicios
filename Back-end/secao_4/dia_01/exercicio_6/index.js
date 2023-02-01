const fs = require('fs').promises;

async function main() {
  try {
    const data = await fs.readFile('./simpsons.json', 'utf-8');
    JSON.parse(data).forEach((char) => console.log(`${char.id} - ${char.name}`))
  } catch (err) {
    console.error(`Erro ao ler o arquivo: ${err.message}`);
  }
}

main()