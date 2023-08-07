const Contact = require("../models/Contact");

module.exports.getContactData = async (req, res) => {
  try {
    const contact = await Contact.find({}).populate({
      path: "user",
      select: "_id fullName email phone refund",
    });
    res.status(200).json({ status: "success", data: contact });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id).populate({
      path: "user",
      select: "_id fullName email phone refund",
    });
    if (!contact) {
      return `Contact Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: contact,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.createContact = async (req, res) => {
  try {
    await Contact.create(req.body);
    res.status(200).json({
      status: "success",
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.updateContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndUpdate(req.params.id, req.body, {
      new: true, // Return the updated document
      runValidators: true, // Validate the data before updating
    });
    if (!contact) {
      return `Contact Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      status: "success",
      data: contact,
    });
  } catch (err) {
    res.status(422).json({
      status: "failed 🔴",
      message: err,
    });
  }
};

module.exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);
    if (!contact) {
      return `Contact Id: ${req.params.id} not found!`;
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
