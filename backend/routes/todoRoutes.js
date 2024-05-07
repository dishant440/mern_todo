const express = require("express");
const router = express.Router();
const { Todo } = require("../database/db");
const { createTodo, updateTodo } = require("../type");

const validateInput = (schemas) => async (req, res, next) => {
  console.log(req.body);
  const reqbody = req.body;
  const checkparse = schemas.safeParse(reqbody).success;
  try {
    if (!checkparse) {
      res.status(400).json({ message: "invalid inputs" });
    }
    next();
  } catch (error) {
    // If validation fails, send a 400 Bad Request response with the validation errors
    res.status(400).json({ message: "bad request" });
  }
};

router.post("/todo", validateInput(createTodo), async (req, res) => {
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
    if (createTodo.parse(todoId).success) {
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
    }
  } catch (error) {
    res.status(400).json({ message: "Invalid Todo Id" });
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
