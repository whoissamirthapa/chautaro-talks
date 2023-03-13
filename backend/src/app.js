const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const talkRouter = require("./routes/talk");
const authRouter = require("./routes/user");
const chautaroGroupTalkRouter = require("./routes/chautaro-group-talk");
const app = express();

dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting up cross origin
app.use(
    cors({
        origin:
            process.env.NODE_ENV === "production"
                ? "*"
                : "http://localhost:3000",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

const connnectDatabase = require("../config/dbconnection");
const auth = require("./middleware/auth");

// databse connection
connnectDatabase();

// router
app.use("/user", authRouter);
app.use("/chautaro-group-talk", chautaroGroupTalkRouter);
app.use("/talk", auth, talkRouter);

module.exports = app;
