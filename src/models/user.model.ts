import crypto from "crypto";
import jwt from "jsonwebtoken";
import {Schema} from "mongoose";
import * as mongoose from "mongoose";
import {IUser} from "../interfaces/IUser";

export const userSchema: Schema = new Schema({
    email: {
        required: true,
        type: String,
        unique: true
    },
    hash: String,
    name: {
        required: true,
        type: String
    },
    salt: String
});

userSchema.methods.setPassword = function(password: string) {
    this.salt = crypto.randomBytes(16).toString("hex");
    this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString("hex");
};

userSchema.methods.validPassword = function(password: string) {
    const hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, "sha512").toString("hex");
    return this.hash === hash;
};

userSchema.methods.generateJwt = function() {
    const expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);

    return jwt.sign({
        _id: this._id,
        email: this.email,
        exp: parseInt(String(expiry.getTime() / 1000), 10),
        name: this.name,
    }, process.env.jwtsecret);
};

export const User = mongoose.model<IUser>("User", userSchema);
