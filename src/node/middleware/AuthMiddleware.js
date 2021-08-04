import jwt from 'jsonwebtoken';
import Config from '../utils/Config.js';

export default (req, res, next) => {
    let token = req.headers['authorization']
    if(!token) return res.tokenAbsent()
    token = token.replace('Bearer ', '')

    jwt.verify(token, Config.jwt_token, function(err, payload) {
        if (err) return res.invalidToken()
        req.user = payload.user;
        next();
    })
}