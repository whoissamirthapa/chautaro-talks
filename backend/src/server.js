require('dotenv').config();
const connnectDatabase = require("../config/dbconnection");

// databse connection
connnectDatabase();

// connect models
require("../model/user");
require("../model/chautaro-group-talk");
require("../model/chautaro-talk-message");

const app = require("./app");


app.listen(4000, ()=>{
    console.log("server listening on port 4000");
})

const io = require("socket.io")();

io.use( (socket, next) => {
    const token = socket.handshake.query.token;

})