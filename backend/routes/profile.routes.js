const express = require('express');
const router = express.Router();
const User = require('../models/User.model');
const profileRouter = require('express').Router();

router.get('/api/users/:id', async (req, res) => {
  const { _id: userID } = req.user;

  try {
    const user = await User.findById(userID);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.put('/api/users/:id', async (req, res) => {
  const { _id: userID } = req.user;
  try {
    const user = await User.findByIdAndUpdate(userID, req.body, { new: true });
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

router.delete('/api/users/:id', async (req, res) => {
  const { _id: userID } = req.user;
  try {
    const user = await User.findByIdAndDelete(userID);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = profileRouter;
