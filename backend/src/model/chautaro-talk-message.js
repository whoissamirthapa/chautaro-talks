const mongoose = require("mongoose");

const chautaroTalkSchema = new mongoose.Schema(
    {
        chautaroGroupTalk: {
            type: mongoose.Schema.Types.ObjectId,
            require: [true, "Name is Required"],
            ref: "ChautaroGroupTalk",
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Chautaro talk is required"],
            ref: "User",
        },
        message: {
            type: String,
            required: [true, "Message is required"],
        },
    },
    {
        timestamps: true,
    }
);

const chautaroTalkModel = mongoose.model("ChautaroTalk", chautaroTalkSchema);

module.exports = chautaroTalkModel;
