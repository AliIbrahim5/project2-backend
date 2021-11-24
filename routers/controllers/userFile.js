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

  
const favoriteUser = (req, res) => {
  const { email, name } = req.params;
  someModel
    .findOneAndUpdate(
      { email: email },
      { $push: { favorite: name } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const removeFavoriteUser = (req, res) => {
  const { email, _id } = req.params;
  userModel
    .findOneAndUpdate(
      { email: email },
      { $pull: { favoriteSchema: _id } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};


const favoriteUserTest = (req, res) => {
  const { email, ObjectId } = req.params;
  userModel.findOne({ ObjectId: req.params.ObjectId }).then((user) => {
    // if (user) {
    //   return res.status(400).json("Card already picked");
    // } else {
      userModel
        .findOneAndUpdate(
          { email: email },
          { $push: { favoriteSchema: ObjectId } },
          { new: true }
        )
        .then((result) => {
          res.send(result);
        })
        .catch((err) => {
          res.send(err);
        });
    // }
  });
};

const getFavorite = (req, res) => {
  const { email } = req.params;
  userModel
    .find({ email: email })
    .populate("favoriteSchema")
    .exec()
    .then((result) => {
      res.send(result[0].favoriteSchema);
    })
    .catch((err) => {
      res.send(err);
    });
};


  module.exports= { oneuser, alluserr,favoriteUser,removeFavoriteUser,getFavorite,favoriteUserTest }