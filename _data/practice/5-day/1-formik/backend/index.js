const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/users", (req, res) => {
	res.json([{ name: "Mehmet" }, { name: "Ahmet" }]);
});

app.post("/add-user", (req, res) => {
	res.json(req.body);
});

app.listen(4000, () => console.log("Server is up!"));
