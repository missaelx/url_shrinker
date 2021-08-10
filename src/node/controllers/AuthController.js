import jwt from 'jsonwebtoken';
import User from "../models/User.js";
import {verifyPassword} from "../utils/Hasher.js";
import Config from '../utils/Config.js';

const AuthController = {
    login: async (req, res) => {
        let user = await User.findOne({email: req.body.email});

        if(user === null || !verifyPassword(req.body.password, user.password)) return res.invalidCredentials();

        let expires = Config.jwt_expires;

        const token = jwt.sign({user}, Config.jwt_token, {
            expiresIn: expires
        });

        res.sendData({token, user, expires});
    },
    users: async (req, res) => {
        let users = await User.find();
        res.json(users);
    }
}


export default AuthController;