const Genre = require("../models/genre");

const createGenre = async (req, res) => {
  try {
    const { name } = req.body;

    const genre = new Genre({ name });

    await genre.save();

    res.status(201).json({
      success: true,

      data: genre,

      message: `Genre ${genre.name} created!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

const getGenres = async (req, res) => {
  try {
    const genres = await Genre.find({});

    res.status(200).json({
      success: true,

      data: genres,

      message: `${genres.length} genres found!`,
    });
  } catch (err) {
    res.status(400).json({
      success: false,

      error: err.message,
    });
  }
};

const updateGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndUpdate(
      req.params.id,
      { name: req.body.name },
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: genre,
      message: `Genre ${genre.id} updated`,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteGenre = async (req, res) => {
  try {
    const genre = await Genre.findByIdAndDelete(req.params.id);

    res.status(204).json({
      success: true,

      data: genre,

      message: `Deleted genre ${genre.id}`,
    });
  } catch (err) {
    res.status(400).json({
      success: fail,

      error: err.message,
    });
  }
};

module.exports = {
  createGenre,
  getGenres,
  updateGenre,
  deleteGenre,
};
