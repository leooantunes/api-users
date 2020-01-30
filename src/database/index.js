const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://leooantunes:leo123456@api-db-ulrwt.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;

module.exports = mongoose;