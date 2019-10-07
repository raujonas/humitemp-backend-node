import express, {Request, Response} from "express";
import * as authController from "../controllers/auth.controller";

export const authRouter = express.Router();

authRouter.get("/", (req: Request, res: Response) => res.send("I am Auth"));
authRouter.post("/login", authController.login);
authRouter.post("/register", authController.register);
