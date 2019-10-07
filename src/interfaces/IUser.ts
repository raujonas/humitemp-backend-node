import {Document} from "mongoose";

export interface IUser extends Document {
    hash: string;
    email: string;
    name: string;
    salt: string;

    setPassword(password: string): void;
    validPassword(password: string): boolean;
    generateJwt(): string;
}
