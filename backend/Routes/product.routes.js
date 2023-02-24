const express = require("express");
const mongoose = require("mongoose");
const ProductModel = require("../Models/Product.model");

const productRouter = express.Router();

// * get route for products with queries

productRouter.get("/", async (req, res) => {
	const { category, brand, sort, order, product_type } = req.query;
	let { page, limit } = req.query;
	if (page === undefined || page < 1) {
		page = 1;
	}
	if (limit === undefined || limit < 1) {
		limit = 12;
	}
	try {
		let tmp = {};
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
		const totalPages = await ProductModel.find(tmp);
		let data = [];
		if (sort) {
			data = await ProductModel.find(tmp)
				.sort(
					sort === "rating"
						? { rating: order === "asc" ? 1 : -1 }
						: { price: order === "asc" ? 1 : -1 }
				)
				.limit(limit)
				.skip(limit * (page - 1));
		} else {
			data = await ProductModel.find(tmp)
				.limit(limit)
				.skip(limit * (page - 1));
		}
		res.status(200);
		res.send({
			status: 200,
			data: data,
			totalPages: Math.ceil(totalPages.length / limit),
		});
	} catch (error) {
		res.status(400);
		res.send({ status: 400, error: error });
	}
});

// * individual product route

productRouter.get("/product/:id", async (req, res) => {
	const id = req.params.id;
	try {
		let product = await ProductModel.findById(id);
		res.status(200);
		res.send({ status: 200, data: product });
	} catch (error) {
		res.status(400);
		res.send({ status: 400, error: error });
	}
});

// * search route
productRouter.get("/search", async (req, res) => {
	const { category, brand, sort, order, product_type, q } = req.query;
	let { page, limit } = req.query;
	if (page === undefined || page < 1) {
		page = 1;
	}
	if (limit === undefined || limit < 1) {
		limit = 12;
	}
	try {
		let tmp = {
			$or: [
				{ name: { $regex: q, $options: "i" } },
				{ brand: { $regex: q, $options: "i" } },
				{ product_type: { $regex: q, $options: "i" } },
			],
		};
		if (category && brand) {
			tmp = {
				...tmp,
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
			tmp = { ...tmp, category: { $regex: category, $options: "i" } };
		} else if (brand) {
			tmp = { ...tmp, brand: { $regex: brand, $options: "i" } };
		}
		if (product_type) {
			tmp = {
				...tmp,
				product_type: { $regex: product_type, $options: "i" },
			};
		}
		const totalPages = await ProductModel.find(tmp);
		let data = [];
		if (sort) {
			data = await ProductModel.find(tmp)
				.sort(
					sort === "rating"
						? { rating: order === "asc" ? 1 : -1 }
						: { price: order === "asc" ? 1 : -1 }
				)
				.limit(limit)
				.skip(limit * (page - 1));
		} else {
			data = await ProductModel.find(tmp)
				.limit(limit)
				.skip(limit * (page - 1));
		}
		res.status(200);
		res.send({
			status: 200,
			data: data,
			totalPages: Math.ceil(totalPages.length / limit),
		});
	} catch (error) {
		res.status(400);
		res.send({ status: 400, error: error });
	}
});
module.exports = productRouter;
