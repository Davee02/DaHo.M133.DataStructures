import express from "express";

const app: express.Application = express();
const port = 8080;

app.listen(port, () => {
    console.log(`Express server started at port ${port}`);
});

app.use("/", express.static("./build/web"));