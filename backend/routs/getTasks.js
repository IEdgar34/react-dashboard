const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
let database = null;
let collection = null;
async function run() {
	try {
		if (collection) return collection;
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
		throw new Error(err.message);
	}
}

async function getTasks(req,res) {
	try {
		const db = await run();
		const id = req.params.id;
		const user = await db.findOne({ _id: new ObjectId(id) });
		if (user) {
			return res.status(200).json({ tasks: user.tasks || []});
		}
		return res.status(200).json({ message: "Not Found" });
	} catch (err) {
		return res.status(401).json({ message: "error" });
	}
}
module.exports =  getTasks