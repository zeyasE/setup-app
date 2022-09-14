import { Context } from "koa";

export default class Server {
    public static async getHealth(ctx: Context) {
        ctx.status = 200;
        ctx.body = {
            message: "Get Health Hello Docker"
        };
    }
}