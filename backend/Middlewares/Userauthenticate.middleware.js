const jwt = require("jsonwebtoken");
require("dotenv").config();

const userAuthenticate = async (req, res, next) => {
	// const token = req.headers.authorization;
	const jwt_token = req.headers.authorization;
	console.log(req.cookies);
	if (!jwt_token) {
		res.status(401);
		res.send({ statu: 401, message: "Please login first" });
	} else {
		const token = jwt_token;
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
