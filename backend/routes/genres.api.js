const express = require("express");

const router = express.Router();

const genresController = require("../controllers/genres.controller");

router.post("/", genresController.createGenre);
router.get("/", genresController.getGenres);
router.put("/:id", genresController.updateGenre);
router.delete("/:id", genresController.deleteGenre);

module.exports = router;
