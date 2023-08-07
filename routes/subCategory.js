const express = require("express");
const router = express.Router();

const subCategoryController = require("../controller/subCategoryController");

router
  .route("/")
  .get(subCategoryController.getSubCategoryData)
  .post(subCategoryController.createSubCategory);

router
  .route("/:id")
  .get(subCategoryController.getSubCategoryById)
  .patch(subCategoryController.updateSubCategory)
  .delete(subCategoryController.deleteSubCategory);

module.exports = router;
