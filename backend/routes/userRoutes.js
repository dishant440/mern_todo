const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../database/db");
const { createUser } = require("../type");
const { validateInput } = require("../validateInput");
const jwt = require("jsonwebtoken");

// Signup route
router.post("/signup", validateInput(createUser), async (req, res) => {
  const { email, firstname, lastname, password } = req.body;

  try {
    const exist = await User.findOne({ email });

    if (exist) {
      return res.status(400).json({ message: "Email already registered" });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = await User.create({
      email,
      firstname,
      lastname,
      password: hashedPassword,
    });

    const token = jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);

    return res.status(201).json({ token });
  } catch (error) {
    return res.status(500).json({
      error
     
    });
  }
});

// Signin route
router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User does not exist. Please sign up." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ message: "Sign in successful", token });
  } catch (error) {
    res.status(500).json({error});
  }
});

module.exports = router;
