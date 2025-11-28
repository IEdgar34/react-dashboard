const { MongoClient, ServerApiVersion } = require("mongodb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

async function run() {
	try {
		const client = new MongoClient(process.env.MONGO_URI, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			},
		});
		await client.connect();
		const database = client.db("sample_mflix");
		const createColl = database.createCollection("users");
		const collection = database.collection("users");
		return collection;
	} catch (err) {
		return new Error(err.message);
	}
}

async function check(req, res) {
	try {
		const hedToken = req.headers.authorization?.split(" ")[1];
		const refreshToken = req.cookies.refreshToken;
		if (!hedToken || !refreshToken) {
			return res.status(401).json({ message: "token missing" });
		}
		const tokenIsVerify = jwt.verify(refreshToken, process.env.SECRET);
		if (!tokenIsVerify) {
			return res.status(401).json({ message: "the token has expired" });
		}
		return res.status(200).json({ message: "tokens are valid" });
	} catch (err) {
		console.log(err)
		return res.status(500).json({ message: err.message });
	}
}

module.exports = check;
