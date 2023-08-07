const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SubCategorySchema = new Schema(
  {
    //SubCategory name
    name: {
      type: String,
      trim: true,
      required: true,
    },
    //SubCategory is draft or not
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const SubCategory = mongoose.model("SubCategory", SubCategorySchema);
module.exports = SubCategory;
