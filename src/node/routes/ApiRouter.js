import express from "express";
import UrlRouter from "./UrlRouter.js";
import AuthMiddleware from "../middleware/AuthMiddleware.js";

const ApiRouter = express.Router();

ApiRouter.use(AuthMiddleware)
ApiRouter.use("/url", UrlRouter);


export default ApiRouter;