const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books)
  } catch (e) {
    res.status(500).json({ message: 'Erro' })
  }
}

module.exports = {
  getAll,
};
