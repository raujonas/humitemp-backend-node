import {Request, Response} from "express";
import passport from "passport";
import "../config/passport.config";
import {User} from "../models/user.model";

export let register = (req: Request, res: Response) => {
    const user = new User(req.body);

    user.setPassword(req.body.password);

    console.log(user);

    user.save((err: Error) => {
        if (!err) {
            res.status(200).json({
                token: user.generateJwt()
            });
        } else {
            res.status(404).json(err.message);
        }
    });
};

export let login = (req: Request, res: Response) => {
    passport.authenticate("local", (err, user, info) => {
        if (err) {
            res.status(404).json(err);
            return;
        }

        if (user) {
            res.status(200);
            res.json({
                token: user.generateJwt()
            });
        } else {
            res.status(401).json(info);
        }
    })(req, res);
};
