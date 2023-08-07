require("dotenv").config();
const express = require("express");
const authUser = require("./routes/auth");
const routerCart = require("./routes/cart");
const routerCategory = require("./routes/category");
const routerContact = require("./routes/contact");
const routerCoupon = require("./routes/coupon");
const routerOrder = require("./routes/order");
const routerProduct = require("./routes/product");
const routerPromotion = require("./routes/promotion");
const routerReturnExchange = require("./routes/returnExchange");
const routerReview = require("./routes/review");
const routerSizeChart = require("./routes/sizeChart");
const routerSubCategory = require("./routes/subCategory");
const routerSubscriber = require("./routes/subscriber");
const routerWarehouse = require("./routes/warehouse");
const routerUser = require("./routes/user");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { verifyAdmin } = require("./middlewares/auth");
const userAddressbookrouter = require("./routes/user-addressbook");
const app = express();

//middleware
app.use(express.json());
app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "https://www.nazaaralifestyle.com",
      "https://dashboard.nazaaralifestyle.com",
    ],
    credentials: true,
  })
);
app.use(cookieParser());
// app.use(verifyAdmin);

//base route
app.use("/api/v1/auth", authUser);
app.use("/api/v1/cart", routerCart);
app.use("/api/v1/category", routerCategory);
app.use("/api/v1/contact", routerContact);
app.use("/api/v1/coupon", routerCoupon);
app.use("/api/v1/order", routerOrder);
app.use("/api/v1/product", routerProduct);
app.use("/api/v1/promotion", routerPromotion);
app.use("/api/v1/return-exchange", routerReturnExchange);
app.use("/api/v1/review", routerReview);
app.use("/api/v1/size-chart", routerSizeChart);
app.use("/api/v1/sub-category", routerSubCategory);
app.use("/api/v1/subscriber", routerSubscriber);
app.use("/api/v1/user-addressbook", userAddressbookrouter);
app.use("/api/v1/user", routerUser);
app.use("/api/v1/warehouse", routerWarehouse);

module.exports = app;
