const express = require("express");
const {
  oneuser,
  alluserr,
  favoriteUser,
  removeFavoriteUser,
  favoriteUserTest,
  getFavorite,
  updateUser,
  deleteUser,
  editFullName,
  findUserByEmail,
} = require("../controllers/userFile");
const userRouter = express.Router();

userRouter.post("/caeert", oneuser);
userRouter.get("/alluse", alluserr);
userRouter.put("/fav/:email/:_id", favoriteUser);
userRouter.get("/favv/:email", getFavorite);
userRouter.put("/removeFav/:email/:_id", removeFavoriteUser);
userRouter.put("/favorite/:email/:ObjectId", favoriteUserTest);
userRouter.put("/update/:_id", updateUser);
userRouter.delete("/delete/:id", deleteUser);
userRouter.put("/edit/:email", editFullName);
userRouter.get("/email/:email", findUserByEmail);

module.exports = userRouter;
