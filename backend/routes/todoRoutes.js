const express = require("express");
const router = express.Router();
const { Todo } = require("../database/db");

router.post("/todo", async (req, res) => {
  //logic to create a todo
  const title = req.body.title;
  const description = req.body.description;
  try {
    const newTodo = await Todo.create({
      title: title,
      description: description,
      completed: false,
    });
    res.json({
      todoId: newTodo._id,
      message: "Todo created Successfully",
    });
  } catch (error) {
    res.json({
      message: "something went wrong....",
    });
  }
});
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

router.get("/completed", async (req, res) => {
  try {
    const completedTodos = await Todo.find({ completed: true });

    res.json({ todos: completedTodos });
  } catch (error) {
    console.error("Error fetching completed todos:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
});

module.exports = router;
