const express = require("express");
const { someFunc, anotherFunc } = require("../controllers/userFile");
const userRouter = express.Router();

userRouter.post("/caeert", someFunc);
userRouter.get("/anotherEndpoint", anotherFunc);

module.exports = userRouter 