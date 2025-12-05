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

async function addTask(req, res) {
	try {
		const db = await run();
		const id = req.params.id;
		const task = req.body;
		if (!task.title) {
			return res.status(200).json({ success: false });
		}
		const user = await db.findOne({ _id: new ObjectId(id) });
		const result = await db.updateOne(
			{ _id: new ObjectId(id) },
			{
				$set: {
					tasks: (user.tasks = [
						{ ...task, id: crypto.randomUUID() },
						...user.tasks,
					]),
				},
			}
		);
		
		if (result) {
			return res.status(200).json({ success: true });
		}
		return res.status(200).json({ success: false });
	} catch (err) {
		console.log(err);
		return res.status(200).json({ message: "error" });
	}
}
module.exports = addTask;
