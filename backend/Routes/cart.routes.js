const express = require("express");
const mongoose = require("mongoose");
const CartModel = require("../Models/Cartitems.model");

const ProductModel = require("../Models/Product.model");

const cartRouter = express.Router();

cartRouter.get("/", async (req, res) => {
	const { email } = req.body;

	try {
		let cart = await CartModel.find({ email: email });
		let ids = [];
		for (let i = 0; i < cart.length; i++) {
			ids.push(cart[i].product_id);
		}

		let tmp = ids.map((id) => mongoose.Types.ObjectId(id));
		// console.log(tmp);
		let data = await ProductModel.find({
			_id: {
				$in: tmp,
			},
		});
		res.status(200);
		res.send({
			status: 200,
			data: data,
			cart: cart,
		});
	} catch (error) {
		res.status(400);
		res.send({ status: 400, error: error });
	}
});

cartRouter.post("/add/:id", async (req, res) => {
	const id = req.params.id;
	const { email } = req.body;
	try {
		let item = await CartModel.find({
			$and: [{ email }, { product_id: id }],
		});

		if (item.length > 0) {
			if (item[0].quantity >= 5) {
				res.status(403);
				res.send({
					status: 403,
					message: "Cannot add anymore of this item to cart",
				});
			} else {
				await CartModel.findOneAndUpdate(
					{ product_id: id },
					{ $inc: { quantity: 1 } }
				);
				res.status(200);
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
			res.status(200);
			res.send({
				status: 200,
				message: `${id} has been added to the cart`,
			});
		}
	} catch (error) {
		res.status(400);
		res.send({ status: 400, message: error });
	}
});

// * add/remove the cart item

cartRouter.patch("/update/:id", async (req, res) => {
	const id = req.params.id;
	const { email, quantity } = req.body;
	console.log(req.body, id);
	try {
		await CartModel.findOneAndUpdate(
			{
				$and: [{ email }, { product_id: id }],
			},
			{ quantity: quantity }
		);
		res.status(200);
		res.send({
			status: 200,
			message: "Item updated successfully",
		});
	} catch (error) {
		res.status(400);
		res.send({ status: 400, message: error });
	}
});

// * delete an item from the cart

cartRouter.delete("/delete/:id", async (req, res) => {
	const id = req.params.id;
	const { email } = req.body;
	try {
		await CartModel.findOneAndDelete({
			$and: [{ email }, { product_id: id }],
		});
		res.status(201);
		res.send({
			status: 201,
			message: "Product deleted successfully",
		});
	} catch (error) {
		res.status(400);
		res.send({ status: 400, message: error });
	}
});

module.exports = cartRouter;
