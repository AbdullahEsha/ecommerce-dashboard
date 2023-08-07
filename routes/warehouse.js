const express = require("express");
const router = express.Router();

const warehouseController = require("../controller/warehouseController");

router
  .route("/")
  .get(warehouseController.getWarehouseData)
  .post(warehouseController.createWarehouse);
router
  .route("/:id")
  .get(warehouseController.getWarehouseById)
  .patch(warehouseController.updateWarehouse)
  .delete(warehouseController.deleteWarehouse);

module.exports = router;
