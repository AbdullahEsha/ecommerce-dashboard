const express = require("express");
const router = express.Router();

const couponController = require("../controller/couponController");

router
  .route("/")
  .get(couponController.getCouponData)
  .post(couponController.createCoupon);

router
  .route("/:id")
  .get(couponController.getCouponById)
  .patch(couponController.updateCoupon)
  .delete(couponController.deleteCoupon);

module.exports = router;
