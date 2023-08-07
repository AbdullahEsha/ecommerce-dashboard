const Coupon = require("../models/Coupon");

const makeCoupon = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports.getCouponData = async (req, res) => {
  try {
    const coupon = await Coupon.find({});
    res
      .status(200)
      .json({ status: "success", total: coupon.length, data: coupon });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getCouponById = async (req, res) => {
  try {
    const coupon = await Coupon.findById(req.params.id);
    if (!coupon) {
      return `Coupon Id: ${req.params.id} not found`;
    }
    res.status(200).json({
      status: "success",
      data: coupon,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createCoupon = async (req, res) => {
  const createCoupon = makeCoupon(6);

  try {
    req.body.couponCode = createCoupon;

    const newCoupon = new Coupon(req.body);
    const coupon = await newCoupon.save();
    res.status(201).json({
      status: "success",
      data: coupon,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
      body: req.body,
    });
  }
};

module.exports.updateCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the data before updating
    });

    if (!coupon) {
      return `Coupon Id: ${req.params.id} not found`;
    }
    res.status(200).json({
      status: "success",
      data: coupon,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findByIdAndDelete(req.params.id);
    if (!coupon) {
      return `Coupon Id: ${req.params.id} not found`;
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
