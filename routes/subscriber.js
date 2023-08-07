const express = require("express");
const router = express.Router();

const subscriberController = require("../controller/subscriberController");

router
  .route("/")
  .get(subscriberController.getSubscriberData)
  .post(subscriberController.createSubscriber);
router
  .route("/:id")
  .get(subscriberController.getSubscriberById)
  .patch(subscriberController.updateSubscriber)
  .delete(subscriberController.deleteSubscriber);

module.exports = router;
