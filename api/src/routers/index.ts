import Router from "koa-router";
import * as controllers from "../controllers";

const routers = new Router;

routers.get('/', controllers.server.getHealth);
routers.get('/users', controllers.users.getAllUsers);
routers.post('/users', controllers.users.addUsers);
routers.delete('/users', controllers.users.deleteUser);

export default routers;