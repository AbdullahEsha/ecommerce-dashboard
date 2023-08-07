const express = require("express");
const router = express.Router();

const orderController = require("../controller/orderController");

router
  .route("/")
  .get(orderController.getOrderData)
  .post(orderController.createOrder);

router
  .route("/:id")
  .get(orderController.getOrderById)
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);

module.exports = router;
