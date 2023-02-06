async function validateName(req, res, next) {
  const { name } = req.body;
  if (name && name.length > 4) {
    next();
  } else if (!name) {
    res.status(400).json({ message: 'O campo nome é obrigatório' });
  } else {
    res.status(400).json({ message: 'O campo deve ter pelo menos 4 caracteres' });
  }
}

async function validatePrice(req, res, next) {
  const { price } = req.body;
  if (!Number(price)) {
    res.status(400).json({ message: 'O campo price é obrigatório' });
  } else if (Number(price) < 0) {
    res.status(400).json({ message: 'O campo price deve ser um número maior ou igual a zero' });
  } else {
    next();
  }
}

async function validateDescription(req, res, next) {
  const { description } = req.body;
  if (!description) {
    res.status(400).json({ message: 'O campo description é obrigatório' });
  } else if (!description.createdAt) {
    res.status(400).json({ message: 'O campo createdAt é obrigatório' }); 
  } else if (!description.rating) {
    res.status(400).json({ message: 'O campo rating é obrigatório' });
  } else if (!description.difficulty) {
    res.status(400).json({ message: 'O campo difficulty é obrigatório' });
  } else {
    next();
  }
}

module.exports = { validateName, validatePrice, validateDescription };
