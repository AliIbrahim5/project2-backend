const  express = require("express");
const  dotenv = require("dotenv");
const cors = require("cors");
const app = express();
const  morgan = require("morgan");
const db = require("./db/db");
const userRouter = require("./routers/routes/someFile");
const cardRouter = require("./routers/routes/cardfile");
dotenv.config();
const PORT = process.env.PORT
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use("/", userRouter);
app.use("/", cardRouter);



app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`);
  });
