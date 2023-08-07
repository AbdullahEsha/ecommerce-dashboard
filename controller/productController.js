const Product = require("../models/Product");
const Slugify = require("slugify");

const makeSKU = (length) => {
  let result = "";
  const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

module.exports.getProductData = async (req, res) => {
  try {
    const product = await Product.find({})
      .populate({
        path: "category",
        select: "_id name status",
      })
      .populate({
        path: "subCategory",
        select: "_id name status",
      });
    res
      .status(200)
      .json({ status: "success", total: product.length, data: product });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createProduct = async (req, res) => {
  const slug = Slugify(req.body.productName, {
    lower: true,
    strict: true,
    replacement: "-",
  });

  const sku = makeSKU(6);

  try {
    req.body.slug = slug;
    req.body.sku = sku;

    const newProduct = new Product(req.body);
    const product = await newProduct.save();

    res.status(200).json({
      status: "success",
      product,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id)
      .populate({
        path: "category",
        select: "_id name status",
      })
      .populate({
        path: "subCategory",
        select: "_id name status",
      });
    if (!product) {
      return `Product Id: ${req.params.id} not found`;
    }
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateProduct = async (req, res) => {
  if (req.body.productName) {
    const slug = Slugify(req.body.productName, {
      lower: true,
      strict: true,
      replacement: "-",
    });
    req.body.slug = slug;
  }

  try {
    const product = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the data before updating
    });

    if (!product) {
      return `Product Id: ${req.params.id} not found`;
    }
    res.status(200).json({
      status: "success",
      data: product,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};
module.exports.deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);

    if (!product) {
      return `Product Id: ${req.body.id} not found`;
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
