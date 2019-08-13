import {Document} from "mongoose";

export interface IHumiTemp extends Document {
    humi?: number;
    temp?: number;
    time?: string;
}
