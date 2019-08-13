import mongoose, {Schema} from "mongoose";
import {IHumiTemp} from "../interfaces/IHumiTemp";

export let HumiTempSchema: Schema = new Schema({
    humi: Number,
    temp: Number,
    time: String
});

const HumiTemp = mongoose.model<IHumiTemp>("HumiTemp", HumiTempSchema);
export default HumiTemp;
