import "reflect-metadata";
import { DataSource } from "typeorm";
import { UsersModel } from "../models/users.models";

const Database = new DataSource({
    type: "postgres",
    host: process.env.DBHOST,
    port: Number(`${process.env.DBPORT}`),
    username: process.env.DBUSERNAME,
    password: process.env.DBPASSWORD,
    database: process.env.DB,
    synchronize: true,
    logging: true,
    entities: [UsersModel],
    migrations: [],
    subscribers: [],
})

export default Database;