const express = require('express');
const authMiddle = require('../middlers/auth');
const User = require('../models/user');
const router = express.Router();

router.use(authMiddle);

router.get('/', async (req,res) => {
    try {
        const users = await User.find();
        return res.send({users});
    } catch (err) {
        res.status(400).send({error: 'usuario not exists'});
    }
});

module.exports = app => app.use('/users', router);