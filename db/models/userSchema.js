const mongoose = require("mongoose");

const user = new mongoose.Schema({
    username: { type: String,  },
    email: { type: String,  },
    password: { type: String,  },
    isDeleted: { type: Boolean},
    phone:{ type: String,  }
  });

  module.exports = mongoose.model("Some", user);