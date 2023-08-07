const mongoose = require("mongoose");
const { isEmail } = require("validator");

const Schema = mongoose.Schema;

const SubscriberSchema = new Schema(
  {
    //subscriber email
    email: {
      type: String,
      trim: true,
      required: [true, "Please enter an email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
  },
  { timestamps: true }
);
SubscriberSchema.path("email").validate((value) => {
  if (!value.includes("@")) {
    return "Please enter a valid email! 🔴";
  }
});

const Subscriber = mongoose.model("Subscriber", SubscriberSchema);
module.exports = Subscriber;
