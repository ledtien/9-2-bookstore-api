const Book = require("../models/book");

const createBook = async (req, res) => {
  try {
    const { title, description, author, genres } = req.body;

    const book = new Book({ title, description, author, genres });

    await book.save();

    res.status(201).json({
      success: true,

      data: book,

      message: `Book ${book.title} created!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({})
      .populate("author")
      .populate("genres", "-_id -__v");

    res.status(200).json({
      success: true,

      data: books,

      message: `${books.length} books found!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

const getSingleBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: book,
      message: `Book ${book.id} found!`,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(
      req.params.id,
      { ...req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: book,
      message: `Genre ${book.id} updated`,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findByIdAndDelete(req.params.id);

    res.status(204).json({
      success: true,

      data: book,

      message: `Deleted genre ${book.id}`,
    });
  } catch (err) {
    res.status(400).json({
      success: fail,

      error: err.message,
    });
  }
};

module.exports = {
  createBook,
  getBooks,
  updateBook,
  deleteBook,
  getSingleBook,
};
