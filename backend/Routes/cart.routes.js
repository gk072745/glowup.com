const express = require("express");
const mongoose = require("mongoose");
const CartModel = require("../Models/Cartitems.model");

const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
	const { email } = req.body;
	try {
		let cart = await CartModel.find({ email: email });
		let ids = [];
		for (let i = 0; i < cart.length; i++) {
			ids.push(cart[i].product_id);
		}
		let data = await ProductModel.find({
			_id: {
				$in: ids.map((id) => mongoose.Types.ObjectId(id)),
			},
		});
		res.send({
			status: 200,
			data: data,
		});
	} catch (error) {
		res.send({ status: 400, error: error });
	}
});

cartRouter.post("/add/:id", async (req, res) => {
	const id = req.params.id;
	const { email } = req.body;
	try {
		let item = await CartModel.find({ product_id: id });
		if (item.length > 0) {
			if (item[0].quantity >= 5) {
				res.send({
					status: 403,
					message: "Cannot add anymore of this item to cart",
				});
			} else {
				await CartModel.findOneAndUpdate(
					{ product_id: id },
					{ $inc: { quantity: 1 } }
				);
				res.send({
					status: 200,
					message: "Item already exists. Increased the quantity by 1",
				});
			}
		} else {
			let new_item = new CartModel({
				product_id: id,
				email: email,
			});
			await new_item.save();
			res.send({
				status: 200,
				message: `${id} has been added to the cart`,
			});
		}
	} catch (error) {
		res.send({ status: 500, message: error });
	}
});

// * add/remove the cart item

cartRouter.patch("/update/:id", async (req, res) => {
	const id = req.params.id;
	const { email, quantity } = req.body;
	try {
		await CartModel.findOneAndUpdate(
			{ product_id: id },
			{ quantity: quantity }
		);
		res.send({
			status: 200,
			message: "Item updated successfully",
		});
	} catch (error) {
		res.send({ status: 400, message: error });
	}
});

// * delete an item from the cart

cartRouter.delete("/delete/:id", async (req, res) => {
	const id = req.params.id;
	const { email } = req.body;
	try {
		await CartModel.findOneAndDelete({ product_id: id });
		res.send({
			status: 201,
			message: "Product deleted successfully",
		});
	} catch (error) {
		res.send({ status: 404, message: error });
	}
});

module.exports = cartRouter;
