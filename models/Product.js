const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    sku: {
      type: String,
      trim: true,
      required: true,
    },
    slug: {
      type: String,
    },
    productName: {
      type: String,
      required: true,
    },
    regularPrice: {
      type: Number,
      required: true,
    },
    salePrice: {
      type: Number,
    },
    //variant is dynamic and quantity is depending on color
    variant: [
      {
        color: {
          type: String,
          required: true,
        },
        imageUrl: [{ type: String }],
        warehouse: [
          {
            warehouseName: { type: String },
            stock: { type: Number },
          },
        ],
      },
    ],
    size: [{ type: String, required: true }],
    description: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
      trim: true,
    },
    subCategory: {
      type: String,
      trim: true,
    },
    promotion: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
