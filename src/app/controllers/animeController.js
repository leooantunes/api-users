const express = require('express');
const authMiddle = require('../middlers/auth');
const anime = require('../models/anime');
const router = express.Router();

router.use(authMiddle);

router.get('/', async (req,res) => {
    res.send({user: req.userId});
});

router.get('/:animeId', async (req,res) => {
    res.send({user: req.userId});
});

router.post('/', async (req,res) => {
    res.send({user: req.userId});
});

router.delete('/', async (req,res) => {
    res.send({user: req.userId});
});

module.exports = app => app.use('/animes', router);