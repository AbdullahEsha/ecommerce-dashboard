const Cart = require("../models/Cart");

module.exports.getCartData = async (req, res) => {
  try {
    const cart = await Cart.find({})
      .populate({
        path: "product",
        select:
          "_id productName regularPrice salePrice quantity slug category imageUrl",
      })
      .populate({
        path: "user",
        select: "_id fullName email phone refund",
      });
    res.status(200).json({ status: "success", total: cart.length, data: cart });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getCartById = async (req, res) => {
  try {
    const cart = await Cart.findById(req.params.id)
      .populate({
        path: "product",
        select:
          "_id productName regularPrice salePrice quantity slug category imageUrl",
      })
      .populate({
        path: "user",
        select: "_id fullName email phone refund",
      });
    if (!cart) {
      return `Cart Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: cart,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createCart = async (req, res) => {
  try {
    const cart = await Cart.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        cart,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndUpdate(req.params.id, req.body);

    if (!cart) {
      return `Cart Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: cart,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteCart = async (req, res) => {
  try {
    const cart = await Cart.findByIdAndDelete(req.params.id);
    if (!cart) {
      return `Cart Id: ${req.params.id} not found!`;
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
