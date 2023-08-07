const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CouponSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    couponCode: {
      type: String,
      required: true,
      unique: true,
    },
    expires: {
      type: Date,
      required: true,
    },
    freeShipping: {
      type: Boolean,
      default: false,
    },
    discountType: {
      type: String,
      enum: ["percentage", "amount"],
      default: "percentage",
    },
    percentageOff: {
      type: Number,
      min: 0,
      max: 100,
      default: 0,
    },
    amountOff: {
      type: Number,
      min: 0,
      default: 0,
    },
    minimumPurchaseAmount: {
      type: Number,
      default: 0,
    },
    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Coupon = mongoose.model("Coupon", CouponSchema);
module.exports = Coupon;
