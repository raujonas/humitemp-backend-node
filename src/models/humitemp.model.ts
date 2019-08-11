import mongoose from "mongoose";
import {Schema} from "mongoose";

let HumiTempSchema = new Schema({
    humi: {type: Number, required: true},
    temp: {type: Number, required: true},
    time: {type: String, required: true}
});

module.exports = mongoose.model('HumiTemp', HumiTempSchema);