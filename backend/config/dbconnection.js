require("dotenv").config();

const mongoose = require("mongoose");


const connnectDatabase = ()=>{
    mongoose.connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
    }).then(con=>{
        console.log(`Mongodb Database connected`)
    })
}

module.exports = connnectDatabase