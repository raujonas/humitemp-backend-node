import bodyParser from "body-parser";
import express from "express";

const index = express();

const port = 1234;

index.listen(port, () => {
    console.log("Server up and running on port " + port);
});