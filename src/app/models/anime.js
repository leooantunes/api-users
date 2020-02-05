const mongoose = require('../../database');
const bcrypt = require('bcryptjs');

const AnimeSchema = new mongoose.Schema({
    urlImage: {
        type: String,
        require: true,
    },
    title: {
        type: String,
        require: true,
    },
    type: {
        type: String,
        require: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        require: true,
    },
    createAt: {
        type: Date,
        default: Date.now,
    },
});

const Anime = mongoose.model('Anime', AnimeSchema);

module.exports = Anime;