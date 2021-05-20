const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users.controller");

router.post("/", usersController.createUser);
router.get("/:id", usersController.getSingleUser);
router.get("/", usersController.getUsers);
router.put("/:id", usersController.updateUser);
router.delete("/:id", usersController.deleteUser);
router.post("/login", usersController.loginWithEmail);

module.exports = router;
