const Author = require("../models/author");
const Book = require("../models/book");

const createAuthor = async (req, res) => {
  try {
    const author = new Author({ name: req.body.name });
    await author.save();
    res.status(201).json({
      success: true,
      data: author,
      message: `Author ${author.name} created`,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const getSingleAuthor = async (req, res) => {
  const books = await Book.find({ author: req.params.id });
  try {
    const author = await Author.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: { author, books },
      message: `Author ${author.id} found!`,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const updateAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: author,
      message: `Author ${author.id} updated`,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteAuthor = async (req, res) => {
  try {
    const author = await Author.findByIdAndDelete(req.params.id);

    res.status(204).json({
      success: true,

      data: author,

      message: `Deleted author ${author.id}`,
    });
  } catch (err) {
    res.status(400).json({
      success: fail,

      error: err.message,
    });
  }
};

module.exports = {
  createAuthor,
  getSingleAuthor,
  updateAuthor,
  deleteAuthor,
};
