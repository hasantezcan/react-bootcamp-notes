const express = require("express");

const app = express();

app.get("/", (req, res, next) => res.end("hello express"));

app.listen(3000, () => console.log("server is up"));
