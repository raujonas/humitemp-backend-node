import {Request, Response} from "express";
import HumiTemp from "../models/humitemp.model";

export let latest = (req: Request, res: Response) => {
    const humiTemp = new HumiTemp(20, 40, "now");
    res.send(humiTemp);
};
