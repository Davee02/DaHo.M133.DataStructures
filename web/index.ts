import express = require("express");
import fs = require("fs");

const app: express.Application = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Express server started at port ${port}`);
});

app.get("/", (req, res) => {
    fs.readFile("./index.html", (err, data) => {
        if (err) throw err;
        res.send(data);
    })
});