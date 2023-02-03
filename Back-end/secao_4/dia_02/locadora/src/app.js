const express = require('express');
const readJSON = require('./utils/fsUtils');

const app = express();

app.use(express.json());

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