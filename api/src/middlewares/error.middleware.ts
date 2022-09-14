import { Context } from "koa";

const errorHandle = (ctx : Context, next: any) => {
    return next().catch((err: any) => {
        if(err.status === 401){
            ctx.status = 401;
            ctx.body = {
                error: err.originalError ? err.originalError.message : err.message
            }
        }else {
            throw err;
        }
    })
}

export default errorHandle;