const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	phone_number: { type: String, default: "" },
	orders: {
		type: [
			{
				product_id: String,
				quantity: Number,
			},
		],
	},
	wishlist: { type: [String], default: [] },
	isAdmin: { type: Boolean, default: false },
});

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
