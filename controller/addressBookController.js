const AddressBook = require("../models/AddressBook");
const User = require("../models/User");

// get all address book data
module.exports.getAllAddressBookData = async (req, res) => {
  try {
    const addressBook = await AddressBook.find({});
    res.status(200).json({ success: true, data: addressBook });
  } catch (err) {
    res.status(422).json({
      success: false,
      message: err,
    });
  }
};

// get a address book data
module.exports.getAddressBookById = async (req, res) => {
  try {
    const addressBook = await AddressBook.findById(req.params.id);
    res.status(200).json({ success: true, data: addressBook });
  } catch (err) {
    res.status(422).json({
      success: false,
      message: err,
    });
  }
};

//create a address book data and also this corresponding address book id on user addressbook array field
module.exports.createAddressBook = async (req, res) => {
  try {
    const data = req.body; // get all data from req body
    const id = data.user_id; // get user_id from body
    if (!id) {
      return res.status(404).json({
        success: false,
        message:
          "🔴 User id can't found. Make sure you put user id in request body",
      });
    }

    const { user_id, ...newData } = data; // extract user_id from data and create a new variable that has no id.
    const addressBook = await AddressBook.create(newData); // create new address book in db
    const addressId = addressBook._id; // extract addressbook id which is created now
    if (!addressBook || !addressId) {
      return res.status(404).json({
        success: false,
        message: "🔴 Userbook can't created successfully!",
      });
    }
    const { addressBook: userAddressBook } = await User.findById(id); // find user's address book data using id of req body data and destructure addressbook array
    const insertId = [...userAddressBook, addressId]; // spread all address book id array and inject a address id.
    const user = await User.findByIdAndUpdate(id, {
      addressBook: insertId, // in address book of user collection update or push all the data of id
    });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: `🔴 User can't found. ${error}`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Address book created successfully",
      data: addressBook,
      user: user,
    });
  } catch (error) {
    res.status(422).json({
      success: false,
      message: `🔴 Address book can't able to create successfully. ${error}`,
    });
  }
};

// update address book data
module.exports.updateAddressBook = async (req, res) => {
  try {
    const addressBook = await AddressBook.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true, // Return the updated document
        runValidators: true, // Validate the data before updating
      }
    );

    if (!addressBook) {
      return `addressBook Id: ${req.params.id} not found!`;
    }
    res.status(200).json({
      success: true,
      message: "Address book updated successfully",
      data: addressBook,
    });
  } catch (error) {
    res.status(422).json({
      success: false,
      message: `🔴 Address book can't able to update successfully. ${error}`,
    });
  }
};

//delete address book and also delete addressbook id from user collection
module.exports.deleteAddressBook = async (req, res) => {
  try {
    const addressBookId = req.params.id;

    const isUpdateDone = await User.updateMany(
      { addressBook: addressBookId },
      { $pull: { addressBook: addressBookId } }
    );

    if (!isUpdateDone) {
      return res.status(404).json({
        success: false,
        message: "🔴 Address book ID couldn't be removed successfully!",
      });
    }

    const deletedAddress = await AddressBook.findOneAndDelete({
      _id: addressBookId,
    });

    if (!deletedAddress) {
      return res.status(404).json({
        success: false,
        message: `🔴 Address book ID ${addressBookId} not found!`,
      });
    }

    res.status(200).json({
      success: true,
      message: "Data deleted successfully",
      deletedAddress,
    });
  } catch (err) {
    res.status(422).json({
      success: false,
      message: `🔴 Failed to delete address book: ${err}`,
    });
  }
};
