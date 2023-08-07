const Order = require("../models/Order");

module.exports.getOrderData = async (req, res) => {
  try {
    const order = await Order.find({})
      .populate({
        path: "user",
        select: "_id fullName email phone refund",
      })
      .populate({
        path: "product",
        select:
          "_id productName regularPrice salePrice quantity slug category imageUrl",
      })
      .populate({
        path: "sizeChart",
        select: "_id sleeveLength chest waist hip pantLength",
      });
    res
      .status(200)
      .json({ status: "success", total: order.length, data: order });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id)
      .populate({
        path: "user",
        select: "_id fullName email phone refund",
      })
      .populate({
        path: "product",
        select:
          "_id productName regularPrice salePrice quantity slug category imageUrl",
      })
      .populate({
        path: "sizeChart",
        select: "_id sleeveLength chest waist hip pantLength",
      });
    if (!order) {
      return `Order Id: ${req.params._id} not found`;
    }
    res.status(200).json({
      status: "success",
      data: order,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createOrder = async (req, res) => {
  try {
    const order = await Order.create(req.body);
    res.status(201).json({
      status: "success",
      data: order,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the data before updating
    });

    if (!order) {
      return `Order Id: ${req.params.id} not found`;
    }
    res.status(200).json({
      status: "success",
      data: order,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteOrder = async (req, res) => {
  try {
    const order = await Order.findByIdAndDelete(req.params.id);
    if (!order) {
      return `Order Id: ${req.params.id} not found`;
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
