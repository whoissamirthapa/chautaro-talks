const { resPonse } = require("../../utils/res");
const TalkSecretChat = require("../model/talk-secrect");
const Talk = require("../model/talk-message");
class TalkController {
    static talkSecretChatCreate = async (req, res) => {
        try {
            const { id } = req.params;
            if (!id) throw "Reciever is required";
            if (req?.payload?.id === id)
                throw "You can not send message to yourself";
            const existChat = await TalkSecretChat.findOne({
                members: { $all: [req?.payload?.id, id] },
            });
            if (existChat) {
                resPonse(
                    res,
                    true,
                    existChat,
                    200,
                    "Chat created successfully"
                );
                return;
            }
            const talk = new TalkSecretChat({
                members: [req?.payload?.id, id],
            }).save();
            if (talk) {
                resPonse(res, true, talk, 200, "Chat created successfully");
                return;
            }
            resPonse(
                res,
                false,
                null,
                401,
                "Chat not created!",
                "Error occured while creating chat"
            );
        } catch (error) {
            console.log(error);
            resPonse(res, false, null, 500, "Internal Server Error", error);
        }
    };
    static getSecretTalks = async (req, res) => {
        try {
            const { id } = req.params;
            if (!id) throw "Reciever is required";
            const talks = await TalkSecretChat.findOne({
                _id: id,
            }).populate("messages");
            if (talks) {
                resPonse(res, true, talks, 200, "Message get successfully");
                return;
            }
            resPonse(res, true, talks, 201, "Message stat message");
        } catch (error) {
            console.log(error);
            resPonse(res, false, null, 500, "Internal Server Error", error);
        }
    };

    static talkStart = async (req, res) => {
        try {
            const { message, sendTo } = req.body;
            const { id } = req.params;
            if (!message) throw "Message is required";

            if (!id) throw "Reciever is required";
            const talk = await new Talk({
                sendBy: req?.payload?.id,
                sendTo: sendTo,
                message,
            }).save();
            if (!talk) throw "Error occured while sending message";

            resPonse(res, true, talk, 200, "Message sent successfully");
            // console.log(talk);
            await TalkSecretChat.findOneAndUpdate(
                {
                    members: { $all: [req?.payload?.id, sendTo] },
                },
                {
                    $push: {
                        messages: talk._id,
                    },
                },
                {
                    new: true,
                    useFindAndModify: false,
                }
            );
        } catch (error) {
            console.log(error);
            resPonse(res, false, null, 500, "Internal Server Error", error);
        }
    };
    static getTalks = async (req, res) => {
        try {
            const { id } = req.params;
            if (!id) throw "Reciever is required";
            const talks = await Talk.find({
                $or: [
                    { sendBy: req?.payload?.id, sendTo: id },
                    { sendBy: id, sendTo: req?.payload?.id },
                ],
            });
            if (talks) {
                resPonse(res, true, talks, 200, "Message get successfully");
                return;
            }
            resPonse(res, true, talks, 201, "Message stat message");
        } catch (error) {
            console.log(error);
            resPonse(res, false, null, 500, "Internal Server Error", error);
        }
    };
}

module.exports = TalkController;
