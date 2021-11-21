const mongoose = require("mongoose");

const cards = new mongoose.Schema({
  name:{type: String, unique: true},  
    img: { type: String, unique: true },
    dac: { type: String  },
    price: { type: Number},
    isfav: { type: Boolean ,default: false },
  });


  module.exports = mongoose.model("card", cards);