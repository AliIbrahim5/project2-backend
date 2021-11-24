const express = require("express");
const { oneuser, alluserr,favoriteUser,removeFavoriteUser,favoriteUserTest } = require("../controllers/userFile");
const userRouter = express.Router();

userRouter.post("/caeert", oneuser);
userRouter.get("/alluse", alluserr);
userRouter.put("/fav/:email/:name", favoriteUser);
userRouter.put("/removeFav/:email/:name", removeFavoriteUser);
userRouter.put("/favorite/:email/:ObjectId", favoriteUserTest);

module.exports = userRouter 