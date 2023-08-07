const SubCategory = require("../models/SubCategory");

module.exports.getSubCategoryData = async (req, res) => {
  try {
    const subCategory = await SubCategory.find({});
    res.status(200).json({ status: "success", data: subCategory });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getSubCategoryById = async (req, res) => {
  try {
    const subCategory = await SubCategory.findById(req.params.id);
    if (!subCategory) {
      return `SubCategory Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: subCategory,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.create(req.body);
    res.status(200).json({
      status: "success",
      data: subCategory,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Return the updated document
        runValidators: true, // Validate the data before updating
      }
    );

    if (!subCategory) {
      return `SubCategory Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: subCategory,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteSubCategory = async (req, res) => {
  try {
    const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
    if (!subCategory) {
      return `SubCategory Id: ${req.params.id} not found!`;
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
