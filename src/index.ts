import bodyParser from "body-parser";
import express from "express";
import humiTempRouter from "./routes/humitemp.route";

const app: express.Application = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use("/humitemp", humiTempRouter);

const port = 1234;

app.listen(port, () => {
    console.log("Server up and running on port " + port);
});
