const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  isDeleted: { type: Boolean, default: true },
  phone: { type: Number, unique: true },
  favoriteSchema: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cards" }],
});

module.exports = mongoose.model("User", user);
