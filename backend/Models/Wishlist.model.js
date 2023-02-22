const mongoose = require("mongoose");

const wishlistSchema = mongoose.Schema({
	product_id: String,
	email: String,
});

const WishlistModel = mongoose.model("wishlist", wishlistSchema);

module.exports = WishlistModel;
