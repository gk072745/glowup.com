const express = require("express");
const mongoose = require("mongoose");
const { findOneAndDelete } = require("../Models/Wishlist.model");
const WishlistModel = require("../Models/Wishlist.model");

const wishlistRouter = express.Router();

wishlistRouter.get("/", async (req, res) => {
	const { email } = req.body;

	try {
		let data = await WishlistModel.find({ email });
		res.send({
			status: 200,
			data: data,
		});
	} catch (error) {
		res.send({ status: 400, error: error });
	}
});

// * adding to the wishlist

wishlistRouter.post("/add/:id", async (req, res) => {
	let id = req.params.id;
	const { email } = req.body;
	try {
		let data = await WishlistModel.find({
			$and: [{ email }, { product_id: id }],
		});
		if (data.length > 0) {
			res.status(409);
			res.send({
				status: 409,
				message: "Item already exists in the wishlist",
			});
		} else {
			let new_item = await WishlistModel({
				product_id: id,
				email: email,
			});
			await new_item.save();
			res.status(200);
			res.send({ status: 200, message: "Item added successfully" });
		}
	} catch (error) {
		res.status(400);
		res.send({ status: 400, error: error });
	}
});

// * removing from the wishlist
wishlistRouter.delete("/delete/:id", async (req, res) => {
	const id = req.params.id;
	const { email } = req.body;
	try {
		await WishlistModel.findOneAndDelete({
			$and: [{ email }, { product_id: id }],
		});
		res.status(201);
		res.send({
			status: 201,
			message: "Successfully deleted product from the wishlist.",
		});
	} catch (error) {
		res.status(400);
		res.send({ status: 400, error: error });
	}
});

module.exports = wishlistRouter;
