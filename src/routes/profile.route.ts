import dotenv from "dotenv";
import express, {Request, Response} from "express";
import jwt from "express-jwt";
import * as profileController from "../controllers/profile.controller";

dotenv.config();

const auth = jwt({
    secret: process.env.jwtsecret,
    userProperty: "payload"
});

export const profileRouter = express.Router();

profileRouter.get("/", (req: Request, res: Response) => res.send("I am Profile"));
profileRouter.get("/me", auth, profileController.readProfile);
