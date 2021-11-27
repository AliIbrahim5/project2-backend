const someModel = require("./../../db/models/userSchema");

// const mongoose = require("mongoose");

const oneuser = (req, res) => {
  const { username, email, password, isDeleted } = req.body;

  const newuser = new someModel({
    username,
    email,
    password,
  });

  newuser
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const alluserr = (req, res) => {
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
  const { email, _id } = req.params;
  someModel
    .findOneAndUpdate(
      { email: email },
      { $push: { favoriteSchema: _id } },
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
  someModel
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
  someModel.findOne({ ObjectId: req.params.ObjectId }).then((user) => {
    // if (user) {
    //   return res.status(400).json("Card already picked");
    // } else {
    someModel
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
  someModel
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

const updateUser = (req, res) => {
  const { id } = req.params;
  const { username, email, password } = req.body;

  someModel
    .findOneAndUpdate({ _id: id }, { username, email, password }, { new: true })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

const deleteUser = (req, res) => {
  const { id } = req.params;

  someModel
    .findOneAndRemove({ _id: id }, { new: true })
    .exec()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};
const editFullName = (req, res) => {
  const { email } = req.params;
  const { username } = req.body;
  someModel
    .findOneAndUpdate(
      { email: `${email}` },
      { $set: { username } },
      { new: true }
    )
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};
const findUserByEmail = (req, res) => {
  const { email } = req.params;
  someModel
    .find({ email: `${email}` })
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

module.exports = {
  oneuser,
  alluserr,
  favoriteUser,
  removeFavoriteUser,
  getFavorite,
  favoriteUserTest,
  updateUser,
  deleteUser,
  editFullName,
  findUserByEmail,
};
