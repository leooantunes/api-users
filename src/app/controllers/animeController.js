const express = require('express');
const authMiddle = require('../middlers/auth');
const Anime = require('../models/anime');
const router = express.Router();

router.use(authMiddle);

router.get('/', async (req,res) => {
    res.send({user: req.userId});
});

router.get('/:animeId', async (req,res) => {
    res.send({user: req.userId});
});

router.post('/', async (req,res) => {
    try {
        const anime = await Anime.create(req.body);
        return res.send({anime});
    } catch (err) {
        return res.status(400).send({error: 'Erro create anime'});
    }
});

router.delete('/', async (req,res) => {
    res.send({user: req.userId});
});

module.exports = app => app.use('/animes', router);