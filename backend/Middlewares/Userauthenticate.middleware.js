const jwt = require("jsonwebtoken");
require("dotenv").config();

const userAuthenticate = async (req, res, next) => {
	// const token = req.headers.authorization;
	if (!req.headers.cookie) {
		res.status(401);
		res.send({ statu: 401, message: "Please login first" });
	} else {
		let arr = req.headers.cookie.split("jwt_token=");
		const token = arr[1];
		if (token) {
			jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
				if (err) res.send(err);
				else if (decoded) {
					// console.log(decoded);
					req.body.email = decoded.email;
					next();
				} else {
					res.status(401);
					res.send("Please login first");
				}
			});
		} else {
			res.status(401);
			res.send("Please login first");
		}
	}
};

module.exports = userAuthenticate;
