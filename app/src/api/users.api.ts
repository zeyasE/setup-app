import { Users } from "../interfaces/users.interface";
import axios from "../libs/axios";

export const getAllUsers = () => new Promise((resolve, reject) => {
    axios.get("/users")
    .then((result) => {
        resolve(result.data.data);
    })
})

export const postUsers = (value: Users) => new Promise((resolve, reject) => {
    axios.post("/users", value)
    .then((result) => {
        console.log(result)
        resolve(result.data.data);
    })
})

export const deleteUsers = (id: any) => new Promise((resolve, reject) => {
    axios.delete("/users", {data: {id: id}})
    .then((result) => {
        resolve(result.data);
    })
})