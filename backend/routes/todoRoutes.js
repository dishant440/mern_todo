const express = require("express");
const router = express.Router();
const { Todo, User } = require("../database/db");
const { authmiddleware } = require("../Middleware");

//route to create a new todo

router.post("/create", authmiddleware, async (req, res) => {
  const { title, description } = req.body;
  const userId = req.userId;
  try {
    const newTodo = await Todo.create({
      title: title,
      description: description,
      completed: false,
    });

    try {
      const user = await User.findById(userId);
      await user.todos.push(newTodo._id);
      await user.save();
    } catch (error) {
      return res.json({ message: error.message });
    }

    res.json({
      todoId: newTodo._id,
      message: "Todo created Successfully",
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

// route to get specific todo with a id

router.get("/todos/:todoId", async (req, res) => {
  const todoId = req.params.todoId;

  try {
    const getTodo = await Todo.findById(todoId);

    if (!getTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    res.json({ todo: getTodo });
  } catch (error) {
    console.error("Error while fetching todo:", error);
    res.status(500).json({ message: "Error while fetching todo" });
  }
});

//route to mark a todo completed in the db

router.put("/completed/:todoId", async (req, res) => {
  const todoId = req.params.todoId;
  try {
    const todo = await Todo.findById(todoId);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }

    todo.completed = true;
    await todo.save();

    res.json({ message: "Todo marked as completed" });
  } catch (error) {
    message: "Something went wrong";
  }
});

//route to get the completed todos

router.get("/completed", async (req, res) => {
  try {
    const completedTodos = await Todo.find({ completed: true });

    res.json({ todos: completedTodos });
  } catch (error) {
    console.error("Error fetching completed todos:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

router.get("/allTodos", async (req, res) => {
  try {
    const todo = await Todo.find({});
    res.json({ todos: todo });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
