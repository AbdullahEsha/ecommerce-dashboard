const ReturnExchange = require("../models/ReturnExchange");

module.exports.getReturnExchangeData = async (req, res) => {
  try {
    const returnExchange = await ReturnExchange.find({});
    res.status(200).json({ status: "success", data: returnExchange });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getReturnExchangeById = async (req, res) => {
  try {
    const returnExchange = await ReturnExchange.findById(req.params.id);
    if (!returnExchange) {
      return `ReturnExchange Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: returnExchange,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createReturnExchange = async (req, res) => {
  try {
    const returnExchange = await ReturnExchange.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        returnExchange,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateReturnExchange = async (req, res) => {
  try {
    const returnExchange = await ReturnExchange.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Return the updated document
        runValidators: true, // Validate the data before updating
      }
    );
    if (!returnExchange) {
      return `ReturnExchange Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: returnExchange,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteReturnExchange = async (req, res) => {
  try {
    const returnExchange = await ReturnExchange.findByIdAndDelete(
      req.params.id
    );
    if (!returnExchange) {
      return `ReturnExchange Id: ${req.params.id} not found!`;
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
