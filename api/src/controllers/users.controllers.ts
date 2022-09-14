import { Context } from "koa";
import Database from "../db";
import * as HttpStatus from "http-status-codes";
import { UsersModel } from "../models/users.models";

export default class Users {

    public static async getAllUsers(ctx: Context) {
        const repository = Database.getRepository(UsersModel);
        const users = await repository.find();
        ctx.status = HttpStatus.StatusCodes.OK;
        return ctx.body = {
            status: "success",
            data: users,
            message: null
        };
    }

    public static async addUsers(ctx: Context) {
        const repository = Database.getRepository(UsersModel);
        const users = await repository.create(ctx.request.body);
        await repository.save(users)
        ctx.status = HttpStatus.StatusCodes.OK;
        return ctx.body= {
            status: "success",
            data: users,
            message: null
        };
    }

    public static async deleteUser(ctx: Context) {
        const repository = Database.getRepository(UsersModel);
        const users = await repository.findOneBy(ctx.request.body);
        if(!users){
            ctx.status = HttpStatus.StatusCodes.NOT_FOUND;
            return ctx.body = {
                status: "failed",
                data: null,
                message: "Not found user"
            };
        }
        await repository.delete(users);
        return ctx.status = HttpStatus.StatusCodes.NO_CONTENT;
    }
}