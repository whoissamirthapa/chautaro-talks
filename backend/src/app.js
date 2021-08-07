const express = require('express');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting up cross origin
app.use(require("cors")())


// router 
app.use("/user",require("../routes/user"));
app.use("/chautaro-group-talk", require("../routes/chautaro-group-talk"));

module.exports = app;