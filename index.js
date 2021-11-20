const  express = require("express");
const  dotenv = require("dotenv");
const app = express();
const db = require("./db/db");
dotenv.config();
app.use(express.json());
const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });