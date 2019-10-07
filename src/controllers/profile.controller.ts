import {Request, Response} from "express";
import {User} from "../models/user.model";

export let readProfile = (req: any, res: any) => {
    if (!req.payload._id) {
        res.status(401).json({
            message: "UnauthorizedError: private profile"
        });
    } else {
        // Otherwise continue
        User
            .findById(req.payload._id)
            .exec((err, user) => {
                res.status(200).json(user);
                res.send();
            });
    }
};
