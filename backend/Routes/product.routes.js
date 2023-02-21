const express = require("express");
const mongoose = require("mongoose");
const ProductModel = require("../Models/Product.model");

const productRouter = express.Router();

// * get route for products with queries

productRouter.get("/", async (req, res) => {
	const { category, brand, sort, order } = req.query;
	try {
		let tmp = "";
		if (category && brand) {
			tmp = {
				$and: [
					{
						$regex: category,
						$options: "i",
					},
					{
						$regex: brand,
						$options: "i",
					},
				],
			};
		} else if (category) {
			tmp = { category: { $regex: category, $options: "i" } };
		} else if (brand) {
			tmp = { brand: { $regex: brand, $options: "i" } };
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

module.exports = productRouter;
