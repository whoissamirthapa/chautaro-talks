const mongoose = require("mongoose");


const chautaroGroupTalkSchema = new mongoose.Schema({
    name: {
        type: String,
        require: [ true, "Name is Required"]
    },
    
}, {
    timestamps: true
   }
);

const ChautaroGroupTalkModel = mongoose.model("ChautaroGroupTalk", chautaroGroupTalkSchema);

module.exports = ChautaroGroupTalkModel;