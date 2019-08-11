import bodyParser from "body-parser";
import express from "express";

const app = express();

const port = 1234;

app.listen(port, () => {
    console.log("Server up and running on port " + port);
});