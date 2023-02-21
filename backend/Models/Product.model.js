const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
	name: { type: String, required: true },
	brand: { type: String, default: "" },
	price: { type: Number, default: 0 },
	description: { type: String, default: "" },
	image_link: { type: String, default: "" },
	rating: { type: Number, default: 1 },
	category: { type: String, default: "makeup" },
	product_type: { type: String, required: true },
	tag_list: { type: [String], default: [] },
	api_featured_image: { type: String, default: "" },
	product_colors: {
		type: [
			{
				hex_value: String,
				colour_name: String,
			},
		],
	},
});

const ProductModel = mongoose.model("product", productSchema);

module.exports = ProductModel;
