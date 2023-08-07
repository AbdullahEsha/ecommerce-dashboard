const mongoose = require("mongoose");
const { isEmail } = require("validator");
const Schema = mongoose.Schema;
const UserSchema = new Schema(
  {
    fullName: {
      type: String,
      required: [true, "Please enter your fullname"],
    },
    gender: {
      type: String,
    },
    email: {
      type: String,
      trim: true,
      required: [true, "Please enter an email"],
      unique: true,
      lowercase: true,
      validate: [isEmail, "Please enter a valid email"],
    },
    password: {
      type: String,
      minlength: [6, "password must be of 6 characters"],
      select: false,
    },
    phone: {
      type: String,
    },
    // if refundable amount available for customer
    refund: {
      type: Number,
    },
    imageUrl: {
      type: String,
    },
    userType: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    addressBook: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AddressBook",
      },
    ],
  },
  { timestamps: true }
);
UserSchema.path("email").validate((value) => {
  if (!value.includes("@")) {
    return "Please enter a valid email! 🔴";
  }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
