const someModel = require("./../../db/models/userSchema");

// const mongoose = require("mongoose");


const oneuser = (req, res) =>{
const { username, email, password ,isDeleted} = req.body;

  const newuser = new someModel({
    username, 
    email,
    password
  });

  newuser 
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
}

const alluserr = (req, res) =>{
    someModel
      .find({})
      .then((result) => {
        res.send(result);
      })
      .catch((err) => {
        res.send(err);
      });
  };


  module.exports= { oneuser, alluserr }