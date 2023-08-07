const express = require("express");
const router = express.Router();

const userAddressController = require("../controller/addressBookController");

router
  .route("/")
  .get(userAddressController.getAllAddressBookData)
  .post(userAddressController.createAddressBook);

router
  .route("/:id")
  .get(userAddressController.getAddressBookById)
  .delete(userAddressController.deleteAddressBook)
  .patch(userAddressController.updateAddressBook);

module.exports = router;
