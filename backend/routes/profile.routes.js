const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const isAuthenticated = require("../middleware/isAuthenticated");
const profileRouter = require("express").Router();
const axios = require(`axios`);
const Diary = require("../models/Diary.model");
const Gratitude = require("../models/Gratitude.model");
const bcrypt = require("bcryptjs");

profileRouter.get("/users/:id", isAuthenticated, async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

profileRouter.put("/users", isAuthenticated, async (req, res) => {
  const { _id } = req.params;
  console.log(req.user)
  
  try {
    const user = await User.findById(_id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    if (
      (req.body.password && !req.body.checkPassword) ||
      (req.body.checkPassword && !req.body.password)
    ) {
      res.status(401).json({
        message:
          "Please confirm your new password by entering it into both fields.",
      });
      return;
    }
    if (req.body.password && req.body.password !== req.body.checkPassword) {
      res
        .status(401)
        .json({ message: "The passwords are not matching." });
      return;
    }

    let hashedPassword = user.password;

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      hashedPassword = await bcrypt.hash(req.body.password, salt);
    }

    const updatedUser = await User.findByIdAndUpdate(
      id,
      { ...req.body, password: hashedPassword },  
      { new: true }
    );
    res.json(updatedUser);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Internal Server Error from Profile route" });
  }
});

profileRouter.delete("/users/:id", isAuthenticated, async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await Diary.deleteMany({ userID: id });
    await Gratitude.deleteMany({ userID: id });
    res.json({ message: "User and all their entries deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = profileRouter;
