import express from "express";
import AuthController from "../controllers/AuthController.js";
const AuthRouter = express.Router();


AuthRouter.post("/login", AuthController.login);
AuthRouter.post("/singin", AuthController.singin);

//testing routes, delete pleasito
AuthRouter.get("/users", AuthController.users);


export default AuthRouter;