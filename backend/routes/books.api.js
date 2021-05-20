const express = require("express");

const router = express.Router();

const booksController = require("../controllers/books.controller");
const { loginRequired } = require("../middlewares/authentication");

router.post("/", booksController.createBook);
router.get("/", loginRequired, booksController.getBooks);
router.get("/:id", booksController.getSingleBook);
router.put("/:id", booksController.updateBook);
router.delete("/:id", booksController.deleteBook);

module.exports = router;
