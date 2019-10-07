import express, {Request, Response} from "express";
import * as humiTempController from "../controllers/humitemp.controller";

export const humiTempRouter = express.Router();

humiTempRouter.get("/", (req: Request, res: Response) => res.send("I am HumiTemp"));

humiTempRouter.get("/all", humiTempController.allHumiTemps);
humiTempRouter.get("/latest", humiTempController.latestHumiTemp);
humiTempRouter.post("/latest", humiTempController.addHumiTemp);
