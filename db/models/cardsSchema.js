const mongoose = require("mongoose");

const cards = new mongoose.Schema({
  name:{type: String, unique: true},  
    img: { type: String,  },
    dac: { type: String  },
    Brand:{type: String},
    price: { type: String},
    isfav: { type: Boolean ,default: false },
  });


  module.exports = mongoose.model("card", cards);