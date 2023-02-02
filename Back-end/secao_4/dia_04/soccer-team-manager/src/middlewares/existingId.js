const existingId = (req, res, next) => {
  const teams = [
    { id: 1, nome: 'São Paulo Futebol Clube', sigla: 'SPF' },
    { id: 2, nome: 'Sociedade Esportiva Palmeiras', sigla: 'PAL' },
  ];
  const id = Number(req.params.id);
  const team = teams.some((t) => t.id === id);
  if (team) {
    next();
  } else {
    res.sendStatus(404);
  }
};

module.exports = existingId;
