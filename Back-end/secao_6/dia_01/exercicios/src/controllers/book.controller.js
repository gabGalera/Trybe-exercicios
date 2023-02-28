const BookService = require('../services/book.service');

const getAll = async (_req, res) => {
  try {
    const books = await BookService.getAll();
    return res.status(200).json(books)
  } catch (e) {
    res.status(500).json({ message: 'Erro' })
  }
}

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BookService.getById(Number(id));

    if(!book) return res.status(404).json({ message: 'Book not found' })

    return res.status(200).json(book);
  } catch(e) {
    res.status(500).json({ message: 'Erro' })
  }
}

const createBook = async (req, res) => {
  const { title, author, pageQuantity } = req.body;
  const newBook = await BookService.create({ title, author, pageQuantity });

  return res.status(200).json(newBook);
}

const updateBook = async (req, res) => {
  const { id } = req.params;
  const { title, author, pageQuantity } = req.body;
  const updatedBook = await BookService.updateBook(id, title, author, pageQuantity);

  if(!updatedBook) return res.status(404).json({ message: 'Livro não encontrado.' })

  return res.status(200).json(updatedBook)

}

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
};
