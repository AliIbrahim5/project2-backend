const express = require("express");
const { oneuser, alluserr } = require("../controllers/userFile");
const userRouter = express.Router();

userRouter.post("/caeert", oneuser);
userRouter.get("/alluse", alluserr);

module.exports = userRouter 