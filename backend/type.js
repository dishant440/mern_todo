const zod = require("zod");

const createTodo = zod.object({
  title: zod.string(),
  description: zod.string(),
});

const updateTodo = zod.object({
  id: zod.string(),
});

const createUser = zod.object({
  email:zod.string().email(),
  firstname:zod.string(),
  lastname:zod.string(),
})

module.exports = {
   createTodo,
   updateTodo,
   createUser
};
