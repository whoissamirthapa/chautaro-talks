const mongoose = require("mongoose");

const chautaroGroupTalkSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            require: [true, "Name is Required"],
        },
        description: {
            type: String,
            require: [true, "Description is Required"],
        },
        members: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "User",
            },
        ],
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
        messages: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "ChautaroTalk",
            },
        ],
    },
    {
        timestamps: true,
    }
);

const ChautaroGroupTalkModel = mongoose.model(
    "ChautaroGroupTalk",
    chautaroGroupTalkSchema
);

module.exports = ChautaroGroupTalkModel;
