const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WarehouseSchema = new Schema(
  {
    //warehouse name
    name: {
      type: String,
      trim: true,
      required: true,
    },
    //warehouse is draft or not
    status: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Warehouse = mongoose.model("Warehouse", WarehouseSchema);
module.exports = Warehouse;
