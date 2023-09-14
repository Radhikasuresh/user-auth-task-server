const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, unique: true, required: true },
    email: { type: String, unique: true, required: true },
    contact: { type: Number, required: true },
    password: { type: String, required: true },
    cpassword: { type: String, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("taskUser", userSchema);
