const express = require('express');
const { readJSON, writeJSON } = require('../utils/fsUtils');
const { 
  validateName, 
  validatePrice, 
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty } = require('../middlewares/validateActivities');

const app = express();

app.use(express.json());

app.post('/activities', 
  validateName, 
  validatePrice, 
  validateDescription, 
  validateCreatedAt,
  validateRating, 
  validateDifficulty,
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
