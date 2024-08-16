// Importing required modules
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/user");

dotenv.config();

exports.auth = async (req, res, next) => {
	try {
		
		const token =
			req.cookies.token ||
			req.body.token ||
			req.header("Authorization").replace("Bearer ", "");

		if (!token) {
			return res.status(401).json({ success: false, message: `Token Missing` });
		}

		try {
			const decode = await jwt.verify(token, process.env.JWT_SECRET);
			
			req.user = decode;
		} catch (error) {
			
			return res
				.status(401)
				.json({ success: false, message: "token is invalid" });
		}

		next();
	} catch (error) {
		// If there is an error during the authentication process, return 401 Unauthorized response
		return res.status(401).json({
			success: false,
			message: `Something Went Wrong While Validating the Token`,
		});
	}
};
