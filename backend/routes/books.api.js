const express = require("express");

const router = express.Router();

const booksController = require("../controllers/books.controller");

router.post("/", booksController.createBook);
router.get("/", booksController.getBooks);
router.get("/:id", booksController.getSingleBook);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
