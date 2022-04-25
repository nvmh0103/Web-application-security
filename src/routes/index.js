const express = require('express');
const userRouter = require('./user');
const authRouter = require('./auth');
const roomRouter = require('./room');
const locationRouter = require('./location');
const reviewRouter = require('./review');

const router = new express.Router();

router.use('/users', userRouter);
router.use('/auth', authRouter);
router.use('/rooms', roomRouter);
router.use('/locations', locationRouter);
router.use('/reviews', reviewRouter);


module.exports = router;

