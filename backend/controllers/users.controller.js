const User = require("../models/user");
const bcrypt = require("bcrypt");

const createUser = async (req, res) => {
  const { name, email, password } = req.body;
  try {
    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({
      success: true,
      data: user,
      message: `User ${user.name} created`,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const getSingleUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    res.status(200).json({
      success: true,
      data: { user },
      message: `User ${user.id} found!`,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const getUsers = async (req, res) => {
  try {
    const user = await User.find();
    res.status(200).json({
      success: true,
      data: { user },
      message: `Users found!`,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const updateUser = async (req, res) => {
  const tokenUserId = req.userId;

  try {
    const user = await User.findByIdAndUpdate(
      tokenUserId,
      { name: req.body.name },
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: user,
      message: `User ${user.id} updated`,
    });
  } catch (error) {
    res.status(404).json({
      success: false,
      error: error.message,
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    res.status(204).json({
      success: true,

      data: user,

      message: `Deleted user ${user.id}`,
    });
  } catch (err) {
    res.status(400).json({
      success: fail,

      error: err.message,
    });
  }
};

const loginWithEmail = async (req, res, next) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user)
    return res.status(400).json({
      success: false,
      error: "Wrong email or password",
    });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch)
    return res.status(400).json({
      success: false,
      error: "Wrong email or password",
    });

  accessToken = await user.generateToken();
  res.status(200).json({
    success: true,
    token: accessToken,
    message: `Logged in successfully!`,
  });
};

const getCurrentUser = async (req, res, next) => {
  const userId = req.userId;
  const user = await User.findById(userId);
  if (!user)
    return res.status(400).json({
      success: false,

      error: "User not found!",
    });
  return res.status(200).json({
    success: true,
    data: user,
    message: "Get current user successfully!",
  });
};

module.exports = {
  createUser,
  getSingleUser,
  updateUser,
  deleteUser,
  getUsers,
  loginWithEmail,
  getCurrentUser,
};
