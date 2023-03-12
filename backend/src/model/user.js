const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [ true, "Name is Required"]
    },
    email: {
        type: String,
        require: [ true, "email is required"],
        unique: [ true, "email already exits"],
    },
    male: {
        type: String,
    },
    address: {
        type: String,
        required: [ true, "Address is required"]
    },
    password: {
        type: String,
        required: [ true, "Password is required" ],
    }
}, {
    timestamps: true
   }
);

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;