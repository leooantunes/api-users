const jwt = require('jsonwebtoken');
const autoConfig = require('../../config/auth.json');
module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader)
        return res.status(401).send({error: 'No token'});

    const parts = authHeader.split(' ');

    if(!parts.length == 2)
        return res.status(401).send({error: 'Toekn error'});

    const [scheme, token ] = parts;

    if(!/^Bearer$/i.test(scheme))
        return res.status(401).send({error: 'Token malformatted'});

    jwt.verify(token, autoConfig.secret, (err,decoded) => {
        if(err) return res.status(401).send({error: 'Token invalid'});
        req.userId = decoded.id;
        return next();
    });

};