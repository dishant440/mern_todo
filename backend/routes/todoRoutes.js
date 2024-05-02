const express = require("express");
const router = express.Router();
const { Todo } = require("../database/db");

router.post("/todo", (req, res) => {
  //logic to create a todo
  const title = req.body.title;
  const description = req.body.description;
  try {
    const newTodo = Todo.create({
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
router.get("/todos/:todoId", (req, res) => {
  const todos = req.params.todoId;

  try {
    const getTodo = Todo.findOne({
      todos,
    });

    res.json({
      todos: getTodo,
    });
  } catch (error) {
    res.json({
      message: "Error while fetching todos",
    });
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
