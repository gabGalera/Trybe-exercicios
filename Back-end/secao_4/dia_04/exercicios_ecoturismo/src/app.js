const express = require('express');
const crypto = require('crypto');
const { writeJSON, readJSON } = require('../utils/fsUtils');
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

async function validateSignup(req, res, next) {
  const { body } = req;
  if (!body.email || !body.password || !body.firstName || !body.phone) {
    res.status(401).json({
      message: 'Campos ausentes!',
    });
  } else {
    next();
  }
}

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
