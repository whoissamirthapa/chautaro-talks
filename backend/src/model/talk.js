const mongoose = require("mongoose");

const talkSchema = new mongoose.Schema(
    {
        sendBy: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Send by is required"],
            ref: "User",
        },
        sendTo: {
            type: mongoose.Schema.Types.ObjectId,
            required: [true, "Send to is required"],
            ref: "User",
        },
        message: {
            type: String,
            required: [true, "Message is required"],
        },
        isRead: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const talkModel = mongoose.model("Talk", talkSchema);
module.exports = talkModel;
