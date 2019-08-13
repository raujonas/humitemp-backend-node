import {Request, Response} from "express";
import HumiTemp from "../models/humitemp.model";

export let allHumiTemps = (req: Request, res: Response) => {
    const humiTemps = HumiTemp.find((err: any, books: any) => {
        if (err) {
            res.send("Error while finding all humitemps");
        } else {
            res.send(humiTemps);
        }
    });
    res.send("Returns all HumiTemps");
};

export let latestHumiTemp = (req: Request, res: Response) => {
    res.send("Returns latest HumiTemp");
};

export let addHumiTemp = (req: Request, res: Response) => {
    res.send("Returns one HumiTemp");
};
