import mongoose, {Schema} from "mongoose";
import {IHumiTemp} from "../interfaces/IHumiTemp";

const humiTempSchema: Schema = new Schema({
    humi: Number,
    temp: Number,
    time: String
});

export const HumiTemp = mongoose.model<IHumiTemp>("HumiTemp", humiTempSchema);
