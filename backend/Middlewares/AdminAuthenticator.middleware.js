const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../Models/User.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const adminAuthenticate = async (req, res, next) => {
	const jwt_token = req.headers.authorization;
	console.log(jwt_token);
	if (!jwt_token) {
		res.status(401);
		res.send({ statu: 401, message: "Please login first" });
	} else {
		const token = jwt_token;
		if (token) {
			jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
				if (err) res.send(err);
				else if (decoded) {
					// console.log(decoded);
					req.body.email = decoded.email;
					let user = await UserModel.find({ email: decoded.email });
					// console.log(user);
					if (user[0].isAdmin) {
						next();
					} else {
						res.status(401);
						res.send({
							status: 401,
							message: "Not authorized",
						});
					}
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

module.exports = adminAuthenticate;
