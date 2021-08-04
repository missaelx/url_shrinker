import jwt from 'jsonwebtoken';
import User from "../models/User.js";
import {verifyPassword} from "../utils/Hasher.js";
import Config from '../utils/Config.js';

const AuthController = {
    login: async (req, res) => {
        let user = await User.findOne({email: req.body.email});

        if(user === null || !verifyPassword(req.body.password, user.password)) return res.invalidCredentials();

        const token = jwt.sign({user}, Config.jwt_token, {
            expiresIn: Config.jwt_expires
        });

        res.sendData({token, user});
    },
    users: async (req, res) => {
        let users = await User.find();
        res.json(users);
    },
    fake: async (req, res) => {
        let newUser = new User({
            email: "missaelxp@gmail.com",
            password: "password",
            fullname: "Missael Hernández"
        })
        newUser.save();
        res.send("saved");
    }
}


export default AuthController;