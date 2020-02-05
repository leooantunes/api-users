const express = require('express');
const authMiddle = require('../middlers/auth');
const Anime = require('../models/anime');
const router = express.Router();

router.use(authMiddle);

router.get('/', async (req,res) => {
    try {
        const animes = await Anime.find().populate('user');
        return res.send({animes});
    } catch (err) {
        return res.status(400).send({error: 'Erro list animes'});
    }
});

router.get('/:animeId', async (req,res) => {
    try {
        const anime = await Anime.findById(req.params.animeId).populate('user');
        return res.send({anime});
    } catch (err) {
        return res.status(400).send({error: 'Erro list animes'});
    }
});

router.post('/', async (req,res) => {
    try {
        const anime = await Anime.create({...req.body, user: req.userId});
        return res.send({anime});
    } catch (err) {
        return res.status(400).send({error: 'Erro create anime'});
    }
});

router.delete('/', async (req,res) => {
    try {
        await Anime.findByIdAndRemove(req.params.animeId);
        return res.send();
    } catch (err) {
        return res.status(400).send({error: 'Erro delete anime'});
    }
});

module.exports = app => app.use('/animes', router);