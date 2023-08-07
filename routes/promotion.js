const express = require("express");
const router = express.Router();

const promotionController = require("../controller/promotionController");

router
  .route("/")
  .get(promotionController.getPromotionData)
  .post(promotionController.createPromotion);

router
  .route("/:id")
  .get(promotionController.getPromotionById)
  .patch(promotionController.updatePromotion)
  .delete(promotionController.deletePromotion);

module.exports = router;
