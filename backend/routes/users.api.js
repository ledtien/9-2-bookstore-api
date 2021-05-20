const express = require("express");

const router = express.Router();

const usersController = require("../controllers/users.controller");
const { loginRequired } = require("../middlewares/authentication");

router.post("/", usersController.createUser);
router.get("/:id", usersController.getSingleUser);
router.get("/", usersController.getUsers);
router.put("/:id", loginRequired, usersController.updateUser);
router.delete("/:id", usersController.deleteUser);
router.post("/login", usersController.loginWithEmail);
router.get("/me", loginRequired, usersController.getCurrentUser);

module.exports = router;
