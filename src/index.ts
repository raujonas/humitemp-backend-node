import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import passport from "passport";
import {authRouter} from "./routes/auth.route";
import {humiTempRouter} from "./routes/humitemp.route";
import {profileRouter} from "./routes/profile.route";

dotenv.config();

mongoose.connect("mongodb+srv://" + process.env.dbuser + ":" + process.env.dbpw +
    "@authcluster-pezki.mongodb.net/humitemp?retryWrites=true&w=majority", (err: any) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Successfully connected");
    }
});

const app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(passport.initialize());

app.use("/auth", authRouter);
app.use("/humitemp", humiTempRouter);
app.use("/profile", profileRouter);

const port = 8080;

app.listen(port, () => {
    console.log("Server up and running on port " + port);
});
