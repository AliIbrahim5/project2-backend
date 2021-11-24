const express = require("express");
const { addcard, allcards } = require("../controllers/cardsfile");

const cardRouter = express.Router();

cardRouter.post("/addcard", addcard);
cardRouter.get("/allcards", allcards);


module.exports = cardRouter 