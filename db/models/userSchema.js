const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username: { type: String, required: false },
    email: { type: String, unique: true  },
    
    password: { type: String,truedefault: false   },
    isDeleted: { type: Boolean},
    phone:{ type: Number, required: false, unique:true}
  });


  module.exports = mongoose.model("user", user);