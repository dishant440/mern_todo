const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const { User } = require("../database/db");
const { createUser } = require("../type");
const { validateInput } = require("../validateInput");
const jwt = require("jsonwebtoken");
// signup route

router.post("/signup", validateInput(createUser), async (req, res) => {
  const email = req.body.email;
  try {
    const exist = await User.findOne({ email });

    if (exist) {
      return res.status(400).json({ message: "Email already registered" });
    }

    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);

    try {
      const newUser = await User.create({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password: hashedPassword, 
      });

      const token = jwt.sign(
        { _id: newUser._id },
        process.env.JWT_SECRET,
      
      );

      return res.status(200).json({
        message: "Signup successful",
        token: token,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "Failed signing up",
    });
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: "User does not exist. Please sign up." });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid email or password." });
    }

    const token = jwt.sign({ _id: user._id }, process.env.JWT_SECRET);

    res.status(200).json({ message: "Sign in successful", token });
  } catch (error) {
    res.status(500).json({ message: "Error signing in", error: error.message });
  }
});

module.exports = router;
