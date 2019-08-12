import {Request, Response} from "express";
import HumiTemp from "../models/humitemp.model";

let latestHumiTemp: HumiTemp;

export let getLatest = (req: Request, res: Response) => {
    if (latestHumiTemp) {
        res.json(latestHumiTemp);
    } else {
        res.send("No latest humitemp yet");
    }

};

export let postLatest = (req: Request, res: Response) => {
    console.log(req.body);
    latestHumiTemp = new HumiTemp(req.body.humi, req.body.temp, req.body.time);
    res.sendStatus(200);
};
