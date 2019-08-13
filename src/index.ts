import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import humiTempRouter from "./routes/humitemp.route";

dotenv.config();

mongoose.connect("mongodb+srv://" + process.env.dbuser + ":" + process.env.dbpw +
    "@authcluster-pezki.mongodb.net/test?retryWrites=true&w=majority", (err: any) => {
    if (err) {
       console.log(err.message);
    } else {
        console.log("Successfully connected");
    }
});

const app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/humitemp", humiTempRouter);

const port = 1234;

app.listen(port, () => {
    console.log("Server up and running on port " + port);
});
