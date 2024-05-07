const mongoose = require("mongoose");
require('dotenv').config();

async function ConnectToDB() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to database:", error.message);
  }
}

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  completed: {
    type: Boolean,
    default: false,
  },
});

// Create Todo model
const Todo = mongoose.model("Todo", todoSchema);

module.exports = { Todo, ConnectToDB };
