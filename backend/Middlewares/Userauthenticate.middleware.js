const jwt = require("jsonwebtoken");
require("dotenv").config();

const userAuthenticate = async (req, res, next) => {
	const token = req.headers.authorization;
	if (token) {
		jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
			if (err) res.send(err);
			else if (decoded) {
				// console.log(decoded);
				req.body.email = decoded.email;
				next();
			} else {
				res.send("Please login first");
			}
		});
	} else {
		res.send("Please login first");
	}
};

module.exports = userAuthenticate;
