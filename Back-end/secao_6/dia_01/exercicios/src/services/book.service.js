const { BookModel } = require('../models');

const getAll = async () => {
  const books = await BookModel.findAll();

  return books;
}

module.exports = {
  getAll,
}

