var express = require("express");
var router = express.Router();

var authorsRouter = require("./authors.api");
router.use("/authors", authorsRouter);

var booksRouter = require("./books.api");
router.use("/books", booksRouter);

var genresRouter = require("./genres.api");
router.use("/genres", genresRouter);

module.exports = router;
