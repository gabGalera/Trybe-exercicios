const express = require('express');
const crypto = require('crypto');
const { writeJSON, readJSON } = require('../utils/fsUtils');
const { 
  validateName, 
  validatePrice, 
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
  validateSignup } = require('../middlewares/validateActivities');

const app = express();

app.use(express.json());

async function validateToken(req, res, next) {
  const { authorization } = req.headers;

  if (!authorization || authorization.length !== 16) {
    res.status(401).json({ message: 'Token inválido!' });
  } else {
    next();
  }
}

app.post('/activities', 
  validateName, 
  validatePrice, 
  validateDescription, 
  validateCreatedAt,
  validateRating, 
  validateDifficulty,
  validateToken,
  async (req, res) => {
    try {
      const { body } = req;
      const { activities } = await readJSON();
      const { users } = await readJSON();
      activities.push(body);
      const payload = { activities, users };
      await writeJSON(payload);
      res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
    } catch (err) {
      console.error(err.message);
    }
  });

function generateToken() {
  return crypto.randomBytes(8).toString('hex');
}

app.post('/signup', validateSignup, async (req, res) => {
    try {
      const { body } = req;
      const token = generateToken();
      const { users } = await readJSON();
      const { activities } = await readJSON();
      body.token = token;
      users.push(body);
      const payload = { activities, users };
      await writeJSON(payload);
      res.status(201).json({ message: 'Atividade cadastrada com sucesso!' });
    } catch (err) {
      console.error(err.message);
    }
  });

module.exports = app;
