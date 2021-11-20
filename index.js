const  express = require("express");
const  dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const db = require("./db/db");
const userRouter = require("./routers/routes/someFile");
dotenv.config();
const PORT = process.env.PORT
app.use(cors());
app.use(express.json());
app.use("/somePath", userRouter);
app.use("/", userRouter);

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
