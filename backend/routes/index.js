const express = require("express");
const router = express.Router();
const todoRouter = require('./todoRoutes');
const userRouter = require('./userRoutes');

router.use('/user',userRouter);
router.unsubscribe('/todo',todoRouter);


module.exports = router;