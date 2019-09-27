import {Request, Response} from "express";
import jwt from "jsonwebtoken";

export let authenticate = (req: Request, res: Response) => {
    if (req.body) {
        let user = req.body;
        console.log(user);

        //TODO: Verify user with hashed password
        if (true == true) {
            let token = jwt.sign(user, process.env.jwtsecret);
            res.status(200).send({
                signed_user: user,
                token: token
            });
        } else {
            res.status(403).send({
                errorMessage: 'Authorisation required!'
            });
        }
    } else {
        res.status(403).send({
            errorMessage: 'Please provide email and password'
        });
    }
};