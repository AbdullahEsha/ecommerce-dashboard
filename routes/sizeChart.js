const express = require("express");
const router = express.Router();

const sizeChartController = require("../controller/sizeChartController");

router
  .route("/")
  .get(sizeChartController.getSizeChartData)
  .post(sizeChartController.createSizeChart);

router
  .route("/:id")
  .get(sizeChartController.getSizeChartById)
  .patch(sizeChartController.updateSizeChart)
  .delete(sizeChartController.deleteSizeChart);

module.exports = router;
