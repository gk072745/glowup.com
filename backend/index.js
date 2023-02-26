const express = require("express");
const app = express();
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./db");
const productRouter = require("./Routes/product.routes");
const adminRouter = require("./Routes/admin.routes");
const userRouter = require("./Routes/user.routes");
const adminAuthenticate = require("./Middlewares/AdminAuthenticator.middleware");
const userAuthenticate = require("./Middlewares/Userauthenticate.middleware");
const cartRouter = require("./Routes/cart.routes");
const wishlistRouter = require("./Routes/wishlist.routes");
var cookieParser = require("cookie-parser");
// * middleware
app.use(
	cors({
		credentials: true,
		origin: "http://localhost:3000",
		exposedHeaders: ["Set-cookie"],
	})
);
app.use(express.json());
app.use(cookieParser());

app.use(function (req, res, next) {
	res.header("Content-Type", "application/json;charset=UTF-8");
	res.header("Access-Control-Allow-Credentials", true);
	// res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	next();
});

app.use("/admin", adminAuthenticate);
app.use("/user/getdetails", userAuthenticate);
app.use("/cart", userAuthenticate);
app.use("/wishlist", userAuthenticate);

// * routes
app.use("/admin", adminRouter);
app.use("/user", userRouter);
app.use("/products", productRouter);
app.use("/cart", cartRouter);
app.use("/wishlist", wishlistRouter);

app.get("/", (req, res) => {
	res.send("Home page");
});

app.listen(process.env.PORT, () => {
	console.log("server listening on port " + process.env.PORT);
	connectDB();
});
