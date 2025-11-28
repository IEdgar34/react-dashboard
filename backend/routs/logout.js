async function logout(req, res) {
	try {
		res.cookie("refreshToken", 'false', {
			httpOnly: true,
			secure: process.env.NODE_ENV === "production",
			sameSite: "Strict",
			expires: -0,
		});
		return res.status(200).json({ success: true });
	} catch (err) {
		return res.status(401).json({ success: false });
	}
}
module.exports = logout