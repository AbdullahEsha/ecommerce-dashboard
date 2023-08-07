const express = require("express");
const router = express.Router();

const cartController = require("../controller/cartController");

router
  .route("/")
  .get(cartController.getCartData)
  .post(cartController.createCart);

router
  .route("/:id")
  .get(cartController.getCartById)
  .patch(cartController.updateCart)
  .delete(cartController.deleteCart);

module.exports = router;
