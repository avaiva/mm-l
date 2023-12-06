const authRouter = require("express").Router();
const User = require("../models/User.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

// TODO add regex to password?
authRouter.post("/signup", async (req, res, next) => {
  const { firstName, password, checkPassword, email } = req.body;
  try {
    if (!firstName || !password || !checkPassword || !email) {
      res.json("All fields are required!");
      return;
    }
    const findUser = await User.findOne({ email });
    if (findUser) {
      res.json("This email is already registered,please go to the login page ");
    }
    if (password !== checkPassword) {
      res.json("The passwords are not matching!");
      return;
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const createUser = await User.create({
      firstName,
      password: hashedPassword,
      email,
    });
    res.json(createUser);
  } catch (err) {
    console.log(err);
  }
});

authRouter.post("/login", async (req, res, next) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      res.json("All fields are required!");
      return;
    }
    const findUser = await User.findOne({ email });
    if (!findUser) {
      res.json("The email adress is not found");
      return;
    }
    const comparePasswords = await bcrypt.compare(password, findUser.password);
    if (!comparePasswords) {
      res.json("Wrong password, please make sure you entered correct password");
      return;
    }

    const { password: userPassword, __v, ...payload } = findUser.toObject();
    const token = jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: "6h",
    });
    res.json(token);
  } catch (err) {
    console.log(err);
  }
});
//TODO if we are not doing the verifying part i quess sending the headers on middleware is not necessary ?
//! we can just send token to Client side and store and manage the all private and anonymous page from there ?
//? middleware code from the previous exercidse we did
// module.exports = (req, res, next) => {
//   const token = req.headers["authorization"];
//   if (!token) return res.status(403).json({ error: "not token provided" });
//   jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
//     if (error) return res.status(401).json({ error: "invalid token" });
//     req.user = decoded;
//     next();
//   });
//authRouter.get("/verify", isAuthenticated, (req, res, next) => {
//   res.json(req.user);
// });
//! this is how we stored on client side
//   axios
//       .post(`${API_URL}/auth/login`, requestBody)
//       .then((response) => {
//         // Request to the server's endpoint `/auth/login` returns a response
//         // with the JWT string ->  response.data.authToken
//         navigate("/"); // <== ADD
//         storeToken(response.data);
//         authenticateUser();
//       })
//       .catch((error) => {
//         const errorDescription = error.response.data.message;
//         setErrorMessage(errorDescription);
//       });
//   };

module.exports = authRouter;
