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
async function userReg(req, res) {
	try {
		const db = await run();
		const user = await db.findOne({ userEmail: req.body.userEmail });
		if (user) {
			const passwordIsCompare = await bcrypt.compare(
				req.body.userPassword,
				user.userPassword
			);
			if (!passwordIsCompare) {
				return res
					.status(200)
					.json({ success: false, message: "wrong password" });
			} else {
				const token = jwt.sign(
					{ id: user.insertedId },
					process.env.SECRET,
					{
						expiresIn: "1h",
					}
				);
				const refreshToken = jwt.sign(
					{ id: user.insertedId },
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
				return res.status(200).json({
					success: true,
					message: "login successful",
					token: token,
					id: user._id,
				});
			}
		} else {
			return res
				.status(404)
				.json({ success: false, message: "user not found" });
		}
	} catch (err) {
		console.log(err);
	}
}

module.exports = userReg;
