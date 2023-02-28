const { BookModel } = require('../models');

const getAll = async () => {
  const books = await BookModel.findAll();

  return books;
}

const getById = async (id) => {
  const book = await BookModel.findByPk(id);

  return book;
}

module.exports = {
  getAll,
  getById,
}

