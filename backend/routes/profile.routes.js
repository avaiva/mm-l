const express = require("express");
const router = express.Router();
const User = require("../models/User.model");
const isAuthenticated = require("../middleware/isAuthenticated");
const profileRouter = require("express").Router();
const axios = require(`axios`);
const Diary = require("../models/Diary.model");
const Gratitude = require("../models/Gratitude.model");

profileRouter.get("/users/:id", async (req, res) => {
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

profileRouter.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

profileRouter.delete("/users/:id", async (req, res) => {
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
