const express = require("express");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");
const port = process.env.PORT || 3000;
const bodyParser = require("body-parser");
const cors = require("cors");
const env = require("dotenv");
const cookieParser = require("cookie-parser");
env.config();
/* app.use(cors()); */
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());
app.use(cookieParser());
// Create a MongoClient with a MongoClientOptions object to set the Stable API version

const check = require("./routs/check");
app.post("/check", (req, res) => {
	check(req, res);
});

const userReg = require("./routs/userRegistartion");
app.post("/registration", (req, res) => {
	userReg(req, res);
});
const userLogin = require("./routs/userLoginin");
app.post("/loginin", (req, res) => {
	userLogin(req, res);
});

const getUser = require("./routs/getUser");
app.get("/user/:id", (req, res) => {
	getUser(req, res);
});

const logout = require("./routs/logout");
app.get("/logout", (req, res) => {
	logout(req, res);
});

const getTasks = require("./routs/getTasks");
app.get("/tasks/:id", (req, res) => {
	getTasks(req, res);
});
const addTask = require("./routs/addTask");
app.post("/addtask/:id", (req, res) => {
	addTask(req, res);
});
app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
