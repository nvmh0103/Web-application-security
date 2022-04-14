const express = require('express');
const userRouter = require('./user');
const authRouter = require('./auth');
const roomRouter = require('./room');

const router = new express.Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/rooms', roomRouter);


module.exports = router;

