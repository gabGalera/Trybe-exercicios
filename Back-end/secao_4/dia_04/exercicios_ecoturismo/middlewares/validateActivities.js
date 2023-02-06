async function validateName(req, res, next) {
  const { name } = req.body;
  if (name && name.length >= 4) {
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

async function validateRating(req, res, next) {
  const { description: { rating } } = req.body;
  if (Number(rating) >= 1 && Number(rating) <= 5) {
    next();
  } else {
    res.status(400).json({ message: 'O campo rating deve ser um número inteiro entre 1 e 5' });
  }
}

async function validateDifficulty(req, res, next) {
  const { description: { difficulty } } = req.body;
  if (difficulty === 'Fácil' || difficulty === 'Médio' || difficulty === 'Difícil') {
    next();
  } else {
    res.status(400).json({ 
      message: 'O campo difficulty deve ser \'Fácil\', \'Médio\' ou \'Difícil\'', 
    });
  }
}

module.exports = { 
  validateName, 
  validatePrice,
  validateDescription,
  validateCreatedAt,
  validateRating,
  validateDifficulty,
};
