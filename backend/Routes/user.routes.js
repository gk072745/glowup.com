const express = require("express");
const mongoose = require("mongoose");
const UserModel = require("../Models/User.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
	const { email } = req.body;
	try {
		let data = await UserModel.find({ email });
		res.send(data);
	} catch (error) {
		res.send(error.message);
	}
});

// * login route

userRouter.post("/login", async (req, res) => {
	const { email, password } = req.body;
	try {
		let user = await UserModel.find({ email });
		if (user.length > 0) {
			bcrypt.compare(password, user[0].password, (err, result) => {
				if (err) res.send(err);
				else if (result) {
					const token = jwt.sign(
						{ email: user[0].email },
						process.env.JWT_SECRET
					);
					res.cookie("jwt_token", token, { httpOnly: true });
					res.status(200);
					res.send({
						status: 200,
						token: token,
					});
				} else {
					res.status(401);
					res.send({
						status: 401,
						message: "Invalid password",
					});
				}
			});
		} else {
			res.status(401);
			res.send({ status: 401, message: "Invalid credentials" });
		}
	} catch (error) {
		res.status(400);
		res.send({ status: 400, error: error });
	}
});

// * register route

userRouter.post("/register", async (req, res) => {
	const { name, email, password, phone_number } = req.body;
	try {
		let user = await UserModel.find({ email });
		if (user.length > 0) {
			res.status(403);
			res.send({
				status: 403,
				message: "User already exists",
			});
		} else {
			bcrypt.hash(password, 5, async (err, hash) => {
				if (err) res.send(err);
				else {
					const user = new UserModel({ ...req.body, password: hash });
					await user.save();
					res.status(201);
					res.send({
						status: 201,
						message: `${name} has been registered successfully`,
					});
				}
			});
		}
	} catch (error) {
		res.status(400);
		res.send({ status: 400, error: error });
	}
});

module.exports = userRouter;
