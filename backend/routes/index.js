const express = require("express");
const router = express.Router();
const todoRouter = require('./todoRoutes');
const userRouter = require('./userRoutes');

router.use('/user',userRouter);
router.use('/todo',todoRouter);


module.exports = router;