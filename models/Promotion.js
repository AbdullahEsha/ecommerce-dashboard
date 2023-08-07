const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const PromotionSchema = new Schema(
  {
    //Promotion name
    name: {
      type: String,
      trim: true,
      required: true,
    },
    //Promotion is draft or not
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Promotion = mongoose.model("Promotion", PromotionSchema);
module.exports = Promotion;
