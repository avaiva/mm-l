const authRouter = require("express").Router();

const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const isAuthenticated = require("../middleware/isAuthenticated");

// TODO add regex to password?
authRouter.post("/signup", async (req, res, next) => {
  const { firstName, password, checkPassword, email } = req.body;
  try {
    if (!firstName || !password || !checkPassword || !email) {
      return res.status(401).json("All fields are required!");
    }
    const findUser = await User.findOne({ email });
    if (findUser) {
      res
        .status(401)
        .json("This email is already registered, please go to the login page ");
    }
    if (password !== checkPassword) {
      return res.status(401).json("The passwords are not matching!");
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const createUser = await User.create({
      firstName,
      password: hashedPassword,
      email,
    });

    const { password: userPassword, __v, ...payload } = createUser.toObject();
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "6h",
    });

    console.log("This is the token",token)
    res.status(200).json({ token: token, payload: payload });
    
  } catch (err) {
    console.log(err);
  }
});

authRouter.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.status(400).json("All fields are required!!");
      return;
    }
    const findUser = await User.findOne({ email });
    if (!findUser) {
      res.status(404).json("The email adress is not found");
      return;
    }
    const comparePasswords = await bcrypt.compare(password, findUser.password);
    if (!comparePasswords) {
      res
        .status(401)
        .json("Wrong password, please make sure you entered correct password");
      return;
    }

    const { password: userPassword, __v, ...payload } = findUser.toObject();
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "6h",
    });
    res.status(200).json({ token: token, payload: payload });

    console.log(token);
  } catch (err) {
    console.log(err);
  }
});

authRouter.get("/verify", (req, res, next) => {
  console.log("Request headers:", req.headers);
  console.log(`req.payload`, req.payload);
  res.status(200).json(req.payload);
});

module.exports = authRouter;
