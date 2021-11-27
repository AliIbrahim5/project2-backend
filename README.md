# project2-backend

trello:
# https://trello.com/b/7fH0xrOL/the-project-steps-to-be-reached


##Used packages:

npm i express
npm i cors
npm i nodemom
npm i morgan
npm i mongoose
npm i dotenv
```

## Controller :
some of our Controller

### Electronics Control
```
 newcard
    .save()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

const allcards = (req, res) => {
  cardsModel
    .find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.send(err);
    });
};

```

### Users Control

```
onst oneuser = (req, res) => {
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
```

## Routes :
some of our Routes

### Electronics Route


```
cardRouter.post("/addcard", addcard);
cardRouter.get("/allcards", allcards);

```

### Users Route

```
userRouter.post("/caeert", oneuser);

userRouter.get("/alluse", alluserr);

userRouter.put("/fav/:email/:_id", favoriteUser);

userRouter.get("/favv/:email", getFavorite);

userRouter.put("/removeFav/:email/:_id", 
removeFavoriteUser);

userRouter.put("/favorite/:email/:ObjectId", 
favoriteUserTest);

userRouter.put("/update/:_id", updateUser);

userRouter.delete("/delete/:id", deleteUser);

userRouter.put("/edit/:email", editFullName);

userRouter.get("/email/:email", findUserByEmail);


```


## our DataBase:

we use mongo db

```
  mongoose.connect(`${DB}`, options).then(
  () => {
    console.log("DB Ready To Use");
  },
  (err) => {
    console.log(err);
  }
);

```


### Schemas 
User Schema

```
const mongoose = require("mongoose");

const user = new mongoose.Schema({
  username: { type: String, unique: true },
  email: { type: String, unique: true },
  password: { type: String, required: true },
  isDeleted: { type: Boolean, default: true },
  phone: { type: Number, unique: true },
  favoriteSchema: [{ type: mongoose.Schema.Types.ObjectId, ref: "Cards" }],
});


module.exports = mongoose.model("User", user);
```



