const Warehouse = require("../models/Warehouse");

module.exports.getWarehouseData = async (req, res) => {
  try {
    const warehouse = await Warehouse.find({});
    res.status(200).json({ status: "success", data: warehouse });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getWarehouseById = async (req, res) => {
  try {
    const id = req.params.id;
    const warehouse = await Warehouse.findById(id);
    if (!warehouse) {
      return `Warehouse Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: warehouse,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createWarehouse = async (req, res) => {
  try {
    const warehouse = await Warehouse.create(req.body);
    res.status(200).json({
      status: "success",
      data: warehouse,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateWarehouse = async (req, res) => {
  try {
    const warehouse = await Warehouse.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Return the updated document
        runValidators: true, // Validate the data before updating
      }
    );

    if (!warehouse) {
      return `Warehouse Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: warehouse,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteWarehouse = async (req, res) => {
  try {
    const warehouse = await Warehouse.findByIdAndDelete(req.params.id);
    if (!warehouse) {
      return `Warehouse Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      message: "data deleted successfully",
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};
