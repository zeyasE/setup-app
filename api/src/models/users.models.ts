import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity()
export class UsersModel {
    @PrimaryGeneratedColumn()
    id?: number

    @Column()
    userName?: string

}