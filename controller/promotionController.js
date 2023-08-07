const Promotion = require("../models/Promotion");

module.exports.getPromotionData = async (req, res) => {
  try {
    const promotion = await Promotion.find({});
    res.status(200).json({ status: "success", data: promotion });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getPromotionById = async (req, res) => {
  try {
    const id = req.params.id;
    const promotion = await Promotion.findById(id);
    if (!promotion) {
      return `Promotion Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: promotion,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createPromotion = async (req, res) => {
  try {
    const promotion = await Promotion.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        promotion,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updatePromotion = async (req, res) => {
  try {
    const promotion = await Promotion.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Return the updated document
        runValidators: true, // Validate the data before updating
      }
    );

    if (!promotion) {
      return `Promotion Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: promotion,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deletePromotion = async (req, res) => {
  try {
    const promotion = await Promotion.findByIdAndDelete(req.params.id);
    if (!promotion) {
      return `Promotion Id: ${req.params.id} not found!`;
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
