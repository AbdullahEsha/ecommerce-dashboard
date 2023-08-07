const express = require("express");
const router = express.Router();

const contactController = require("../controller/contactController");

router
  .route("/")
  .get(contactController.getContactData)
  .post(contactController.createContact);

router
  .route("/:id")
  .get(contactController.getContactById)
  .patch(contactController.updateContact)
  .delete(contactController.deleteContact);

module.exports = router;
