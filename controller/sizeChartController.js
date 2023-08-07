const SizeChart = require("../models/SizeChart");

module.exports.getSizeChartData = async (req, res) => {
  try {
    const sizeChart = await SizeChart.find({});
    res.status(200).json({ status: "success", data: sizeChart });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getSizeChartById = async (req, res) => {
  try {
    const sizeChart = await SizeChart.findById(req.params.id);
    if (!sizeChart) {
      return `SizeChart Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: sizeChart,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createSizeChart = async (req, res) => {
  try {
    const sizeChart = await SizeChart.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        sizeChart,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateSizeChart = async (req, res) => {
  try {
    const sizeChart = await SizeChart.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Return the updated document
        runValidators: true, // Validate the data before updating
      }
    );
    if (!sizeChart) {
      return `SizeChart Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: sizeChart,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteSizeChart = async (req, res) => {
  try {
    const sizeChart = await SizeChart.findByIdAndDelete(req.params.id);
    if (!sizeChart) {
      return `SizeChart Id: ${req.params.id} not found!`;
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
