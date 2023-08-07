const express = require("express");
const router = express.Router();

const categoryController = require("../controller/categoryController");

router
  .route("/")
  .get(categoryController.getCategoryData)
  .post(categoryController.createCategory);
router
  .route("/:id")
  .get(categoryController.getCategoryById)
  .patch(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

module.exports = router;
