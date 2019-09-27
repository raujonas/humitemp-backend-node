import express, {Request, Response} from "express";
import * as authController from "../controllers/auth.controller";

const authRouter = express.Router();

authRouter.get("/", (req: Request, res: Response) => res.send("I am Auth"));

authRouter.post("/authenticate", authController.authenticate);

export = authRouter;