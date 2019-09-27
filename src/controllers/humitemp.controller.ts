import {Request, Response} from "express";
import HumiTemp from "../models/humitemp.model";

export let allHumiTemps = (req: Request, res: Response) => {
    HumiTemp.find((err: any, humiTemps: any) => {
        if (err) {
            res.send("Error while finding all humitemps");
        } else {
            res.send(humiTemps);
        }
    });
};

export let latestHumiTemp = (req: Request, res: Response) => {
    HumiTemp.findOne().sort({ field: "asc", _id: -1 }).limit(1).exec((err: any, latest: any) => {
        if (err) {
            res.send("Error while finding latest humitemp");
        } else {
            res.send(latest);
        }
    });
};

export let addHumiTemp = (req: Request, res: Response) => {
    const newHumiTemp = new HumiTemp(req.body);

    newHumiTemp.save((err: any) => {
        if (err) {
            console.log(err);
            res.send("Error while adding new humitemp");
        } else {
            res.send(newHumiTemp);
            console.log(newHumiTemp);
        }
    });
};
