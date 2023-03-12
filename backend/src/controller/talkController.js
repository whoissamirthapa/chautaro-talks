const { resPonse } = require("../../utils/res");
const Talk = require("../model/talk");
class TalkController {
    static talkStart = async (req, res) => {
        try {
            const { message } = req.body;
            const { id } = req.params;
            if (!message) throw "Message is required";

            if (!id) throw "Reciever is required";
            const talk = new Talk({
                sendBy: req?.payload?.id,
                sendTo: id,
                message,
            });
            await talk.save();
            resPonse(res, true, talk, 200, "Message sent successfully");
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
