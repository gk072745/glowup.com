const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../Models/User.model");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const adminAuthenticate = async (req, res, next) => {
	if (!req.headers.cookie) {
		res.status(401);
		res.send({ statu: 401, message: "Please login first" });
	} else {
		let arr = req.headers.cookie.split("jwt_token=");
		const token = arr[1];
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
