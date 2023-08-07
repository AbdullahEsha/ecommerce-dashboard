const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ReturnExchangeSchema = new Schema(
  {
    // all issues of the product in description
    issue: {
      type: String,
      required: true,
    },
    imageUrl: [{ type: String }],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
  },
  { timestamps: true }
);

const ReturnExchange = mongoose.model("ReturnExchange", ReturnExchangeSchema);
module.exports = ReturnExchange;
