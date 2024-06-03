const express = require("express");
const router = express.Router();
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
      return res.status(400).json({ message: "email already registered" });
    }

    try {
      const newUser = await User.create({
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      });
      const token = await jwt.sign({ _id: newUser._id }, process.env.JWT_SECRET);
      return res.status(200).json({
        message: "signup successful",
        token: token,
      });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }

  } catch (error) {
    return res.status(500).json({
      error: error.message,
      message: "failed Signing up",
    });
  }
});


router.post("/signin", validateInput(createUser), async (req, res) => {});


module.exports = router;