const express = require("express");
const router = express.Router();

const returnExchangeController = require("../controller/returnExchangeController");

router
  .route("/")
  .get(returnExchangeController.getReturnExchangeData)
  .post(returnExchangeController.createReturnExchange);

router
  .route("/:id")
  .get(returnExchangeController.getReturnExchangeById)
  .patch(returnExchangeController.updateReturnExchange)
  .delete(returnExchangeController.deleteReturnExchange);

module.exports = router;
