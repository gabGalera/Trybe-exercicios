const express = require('express');
const { readJSON, writeJSON } = require('../utils/fsUtils');

const app = express();

app.use(express.json());

async function validateActivities(req, res, next) {
  const { name } = req.body;
  if (name && name.length > 4) {
    next();
  } else if (!name) {
    res.status(400).json({ message: 'O campo nome é obrigatório' });
  } else {
    res.status(400).json({ message: 'O campo deve ter pelo menos 4 caracteres' });
  }
}

app.post('/activities', validateActivities, async (req, res) => {
  try {
    const { body } = req;
    await writeJSON(body);
    res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
  } catch (err) {
    console.error(err.message);
  }
});

module.exports = app;
