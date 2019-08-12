import * as express from "express";
import * as humiTempController from "../controllers/humitemp.controller";

const humiTempRouter = express.Router();

humiTempRouter.get("/latest", humiTempController.getLatest);
humiTempRouter.post("/latest", humiTempController.postLatest);

export = humiTempRouter;
