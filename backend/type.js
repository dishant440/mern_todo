const zod = require("zod");


const createUser = zod.object({
  email:zod.string().email(),
  firstname:zod.string(),
  lastname:zod.string(),
})

module.exports = {
  createUser
};
