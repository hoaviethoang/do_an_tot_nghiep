const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    img: { type: String, default: "https://vnn-imgs-a1.vgcloud.vn/image1.ictnews.vn/_Files/2020/03/17/trend-avatar-1.jpg" },
    password: { type: String },
    isAdmin: {
      type: Boolean,
      default: false,
    },
   
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);