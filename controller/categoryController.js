const Category = require("../models/Category");

module.exports.getCategoryData = async (req, res) => {
  try {
    const category = await Category.find({});
    res.status(200).json({ status: "success", data: category });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getCategoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const category = await Category.findById(id);
    if (!category) {
      return `Category Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: category,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createCategory = async (req, res) => {
  try {
    const category = await Category.create(req.body);
    res.status(200).json({
      status: "success",
      data: {
        category,
      },
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the data before updating
    });

    if (!category) {
      return `Category Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: category,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteCategory = async (req, res) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);
    if (!category) {
      return `Category Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      message: "data deleted successfully"
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};
