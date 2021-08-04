import express from "express";
import cors from 'cors';
import ResponseMiddleware from "./middleware/ResponseMiddleware.js";
import DeviceInfoMiddleware from "./middleware/DeviceInfoMiddleware.js";
import AuthRouter from "./routes/AuthRouter.js";
import ApiRouter from "./routes/ApiRouter.js";
import UrlRedirectsController from "./controllers/UrlRedirectsController.js";
import Config from "./utils/Config.js";

const app = express();

app.use(cors())
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(ResponseMiddleware);
app.use(DeviceInfoMiddleware);


app.get('/m/:urlCode', UrlRedirectsController.redirectByCode)

app.use("/auth", AuthRouter);
app.use("/api", ApiRouter);

app.get("*", (req, res) => {
    res.send("Are u looking for something?");
})


app.listen(Config.port, () => {
    console.log("Server started at port " + Config.port);
});