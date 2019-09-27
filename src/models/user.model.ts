import mongoose, {Schema} from "mongoose";
import {IUser} from "../interfaces/IUser";
import crypto from "crypto"

export let UserSchema: Schema = new Schema({
    mail: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    hash: String,
    salt: String
});

UserSchema.methods.setPassword = function(password: string) {
this.salt = crypto.randomBytes(16).toString('hex');
this.hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
};

const User = mongoose.model<IUser>("User", UserSchema);
export default User;