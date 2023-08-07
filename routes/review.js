const express = require("express");
const router = express.Router();

const reviewController = require("../controller/reviewController");

router
  .route("/")
  .get(reviewController.getReviewData)
  .post(reviewController.createReview);

router
  .route("/:id")
  .get(reviewController.getReviewById)
  .patch(reviewController.updateReview)
  .delete(reviewController.deleteReview);

module.exports = router;
