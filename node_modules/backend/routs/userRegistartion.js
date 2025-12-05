const { MongoClient, ServerApiVersion } = require("mongodb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
let database = null;
let collection = null;
async function run() {
	if (collection) return collection;
	try {
		const client = new MongoClient(process.env.MONGO_URI, {
			serverApi: {
				version: ServerApiVersion.v1,
				strict: true,
				deprecationErrors: true,
			},
		});
		await client.connect();
		database = client.db("sample_mflix");
		collection = database.collection("users");
		return collection;
	} catch (err) {
		return new Error(err.message);
	}
}

async function user(req, res) {
	try {
		const userCollection = await run();
		const userl = await userCollection.findOne({
			userEmail: req.body.userEmail,
		});
		if (userl) {
			return res.json({
				message: "a user with this address already exists",
			});
		}
		const hash = await bcrypt.hash(req.body.userPassword, 10);
		const query = {
			name: req.body.name,
			lastName: req.body.lastName,
			userName: req.body.userName,
			userEmail: req.body.userEmail,
			userPassword: hash,
			tasks: [
				/* {	id: crypto.randomUUID(),
					title: "title",
					description: "description",
					img: "arrayBuffer",
					priority: "moderate",
					status: "not starrted",
					createdDate: new Date(),
				}, */
			],
		};
		const resp = await userCollection.insertOne(query);
		const token = jwt.sign({ id: resp.insertedId }, process.env.SECRET, {
			expiresIn: "1h",
		});
		const refreshToken = jwt.sign(
			{ id: resp.insertedId },
			process.env.SECRET,
			{
				expiresIn: "7d",
			}
		);
		res.cookie("refreshToken", refreshToken, {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "Strict",
			expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000),
		});
		return res.status(201).json({
			message: "the user has registered",
			token: token,
			id: resp.insertedId,
		});
	} catch (err) {
		console.log(err);
	}
}

module.exports = user;
