import { Column } from "typeorm";

export class LoginDto{
    @Column()
    username: string

    @Column()
    password: string
}