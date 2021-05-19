var express = require("express");
var router = express.Router();

var authorsRouter = require("./authors.api");
router.use("/authors", authorsRouter);

var booksRouter = require("./books.api");
router.use("/books", booksRouter);

module.exports = router;
