const express = require("express");
const mongoose = require("mongoose");
const ProductModel = require("../Models/Product.model");

const productRouter = express.Router();

// * get route for products with queries

productRouter.get("/", async (req, res) => {
	const { category, brand, sort, order, product_type } = req.query;
	try {
		let tmp = "";
		if (category && brand) {
			tmp = {
				$and: [
					{
						category: {
							$regex: category,
							$options: "i",
						},
					},
					{
						brand: {
							$regex: brand,
							$options: "i",
						},
					},
				],
			};
		} else if (category) {
			tmp = { category: { $regex: category, $options: "i" } };
		} else if (brand) {
			tmp = { brand: { $regex: brand, $options: "i" } };
		}
		if (product_type) {
			tmp = {
				...tmp,
				product_type: { $regex: product_type, $options: "i" },
			};
		}
		let data = [];
		if (sort) {
			data = await ProductModel.find(tmp).sort(
				sort === "rating"
					? { rating: order === "asc" ? 1 : -1 }
					: { price: order === "asc" ? 1 : -1 }
			);
		} else {
			data = await ProductModel.find(tmp);
		}
		res.send({
			status: 200,
			data: data,
		});
	} catch (error) {
		res.send({ status: 400, error: error });
	}
});

// * individual product route

productRouter.get("/:id", async (req, res) => {
	const id = req.params.id;
	try {
		let product = await ProductModel.findById(id);
		res.send({ status: 200, data: product });
	} catch (error) {
		res.send({ status: 400, error: error });
	}
});

// * search route
productRouter.get("/search", async (req, res) => {
	const { q } = req.query;
	if (!q) {
		res.send({ status: 400, message: "Please enter a valid search term" });
	} else {
		let tmp = {};
		tmp = {
			$or: [
				{ name: { $regex: q, $options: "i" } },
				{ brand: { $regex: q, $options: "i" } },
				{ product_type: { $regex: q, $options: "i" } },
			],
		};
		try {
			let data = await ProductModel.find(tmp);
			res.send({ status: 200, data: data });
		} catch (error) {
			res.send({ status: 400, error: error });
		}
	}
});
module.exports = productRouter;
