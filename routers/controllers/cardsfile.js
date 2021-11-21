const cardsModel = require("./../../db/models/cardsSchema");

// const mongoose = require("mongoose");


const addcard = (req, res) =>{
const { name,img, dac, price ,isfav,Brand} = req.body;

  const newcard = new cardsModel({
    name,
    img, 
    Brand,
    dac,
    price,
    isfav
  });

  newcard 
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
}

const allcards = (req, res) =>{
    cardsModel
      .find({})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };


  module.exports= { addcard, allcards }