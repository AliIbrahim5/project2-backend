const mongoose = require("mongoose");

const cards = new mongoose.Schema({
  name: { type: String, unique: true },
  img: { type: String },
  dac: { type: String },
  Brand: { type: String },
  price: { type: String },
});

module.exports = mongoose.model("Cards", cards);
