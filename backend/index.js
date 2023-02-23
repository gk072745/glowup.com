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
// * middleware
app.use(cors());
app.use(express.json());

app.use("/admin", adminAuthenticate);
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

