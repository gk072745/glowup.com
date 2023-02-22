const mongoose = require("mongoose");

const cartItemSchema = mongoose.Schema({
	product_id: String,
	email: String,
	quantity: { type: Number, default: 1 },
});

const CartModel = mongoose.model("cart", cartItemSchema);

module.exports = CartModel;
