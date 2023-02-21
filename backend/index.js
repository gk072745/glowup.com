const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Home page");
});

app.listen(process.env.PORT, async () => {
	console.log("server listening on port " + process.env.PORT);
	connectDB();
});
