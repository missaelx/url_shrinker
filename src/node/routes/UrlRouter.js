import express from "express";
import UrlController from "../controllers/UrlController.js";
const UrlRouter = express.Router();

UrlRouter.get("/", UrlController.get);
UrlRouter.get("/:id", UrlController.getOne);
UrlRouter.post("/", UrlController.create);

export default UrlRouter;