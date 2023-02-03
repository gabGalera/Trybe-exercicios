const express = require('express');
const readJSON = require('./utils/fsUtils');

const app = express();

app.use(express.json());

app.get('/movies', async (req, res) => {
  try {
    const data = await readJSON();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get('/movies/:id', async (req, res) => {
  try {
    const data = await readJSON();
    const movies = data.find((movie) => movie.id === Number(req.params.id));
    res.status(200).json(movies);
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = app;