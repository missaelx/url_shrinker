import express from "express";
import AuthController from "../controllers/AuthController.js";
const AuthRouter = express.Router();


AuthRouter.post("/login", AuthController.login);

//testing routes, delete pleasito
AuthRouter.get("/users", AuthController.users);
AuthRouter.get("/fake", AuthController.fake);


export default AuthRouter;