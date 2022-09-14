import Koa from "koa";
import logger from "koa-logger";
import bodyParser from "koa-bodyparser";
import json from "koa-json";
import routers from "./routers";
import errorHandle from "./middlewares/error.middleware";
import Database from "./db";
import cors from "@koa/cors";
import * as dotenv from "dotenv";

dotenv.config();

const app = new Koa();
const PORT: number = Number(process.env.PORT) || 8080;

//middleware
app.use(cors());
app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(errorHandle);

//routes
app.use(routers.routes()).use(routers.allowedMethods());

Database.initialize()
    .then(() => {
        console.log("Data Source has been initialize!");
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

app.listen(PORT, () => {
    console.log("Api server listening on port : ", PORT );
})