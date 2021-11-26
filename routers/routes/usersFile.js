const express = require("express");
const { oneuser, alluserr,favoriteUser,removeFavoriteUser,favoriteUserTest,getFavorite } = require("../controllers/userFile");
const userRouter = express.Router();

userRouter.post("/caeert", oneuser);
userRouter.get("/alluse", alluserr);
userRouter.put("/fav/:email/:_id", favoriteUser);
userRouter.get("/favv/:email", getFavorite);
userRouter.put("/removeFav/:email/:_id", removeFavoriteUser);
userRouter.put("/favorite/:email/:ObjectId", favoriteUserTest);
module.exports = userRouter 