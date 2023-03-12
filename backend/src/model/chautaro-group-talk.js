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
        members: {
            type: Array,
        },
        createdBy: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Auth",
        },
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
