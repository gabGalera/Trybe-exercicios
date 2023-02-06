const express = require('express');
const { readJSON, writeJSON } = require('../utils/fsUtils');
const { 
  validateName, 
  validatePrice, 
  validateDescription } = require('../middlewares/validateActivities');

const app = express();

app.use(express.json());

function mustBeAValidDay(day) {
  return Number(day) > 31 || Number(day) < 1; 
}
function mustBeAValidMonth(month) { 
  return Number(month) > 12 || Number(month) < 1; 
}

function mustBeAValidYear(year) {
  return Number(year) < 0;
}
async function validateCreatedAt(req, res, next) {
  const { description: { createdAt } } = req.body;
  const message = 'O campo createdAt deve ter o formato \'dd/mm/aaaa\'';
  if (
    !createdAt 
    || mustBeAValidDay(createdAt.split('/')[0])
    || mustBeAValidMonth(createdAt.split('/')[1])
    || mustBeAValidYear(createdAt.split('/')[2])
    ) {
    res.status(400).json({ message });
  } else {
    next();
  }
}

app.post('/activities', 
  validateName, 
  validatePrice, 
  validateDescription, 
  validateCreatedAt, 
  async (req, res) => {
    try {
      const { body } = req;
      await writeJSON(body);
      res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
    } catch (err) {
      console.error(err.message);
    }
  });

module.exports = app;
