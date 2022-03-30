const express = require('express');
const userRouter = require('./user')

const router = new express.Router();

router.use('/user', userRouter);

module.exports = router;

