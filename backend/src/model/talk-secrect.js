const { Schema } = require("mongoose");
const mongoose = require("mongoose");

const talkSecretChatSchema = new Schema({
    members: [
        {
            type: Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: "Talk",
        },
    ],
});

const talkSecretChatModel = mongoose.model(
    "TalkSecretChat",
    talkSecretChatSchema
);
module.exports = talkSecretChatModel;
