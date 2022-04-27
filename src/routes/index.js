const express = require('express');
const userRouter = require('./user');
const hostRouter = require('./host');
const adminRouter = require('./admin');


const router = new express.Router();

router.use('/user', userRouter);
router.use('/host', hostRouter);
router.use('/admin', adminRouter);


module.exports = router;

