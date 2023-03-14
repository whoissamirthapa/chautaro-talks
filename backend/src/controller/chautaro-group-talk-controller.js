const { resPonse } = require("../../utils/res");
const ChautaroGroupTalkModel = require("../model/chautaro-group-talk");
const ChautaroTalkModel = require("../model/chautaro-talk-message");

exports.createChautaroGroupTalkName = async (req, res) => {
    const { name, description } = req.body;

    if (!name) throw "Group Talk Name is required";
    if (!description) throw "Group Talk Description is required";

    try {
        const groupTalkNameExists = await ChautaroGroupTalkModel.findOne({
            name,
        });

        if (groupTalkNameExists) {
            throw "Group Talk Name already exists";
        }
        const payload = req.payload;

        const chautaroGroupTalkName = await new ChautaroGroupTalkModel({
            name,
            description: description,
            createdBy: payload?.id,
        }).save();

        if (!chautaroGroupTalkName) throw "Group Talk Name is not created";

        resPonse(
            res,
            true,
            chautaroGroupTalkName,
            200,
            "Chautaro Group Talk is created"
        );
    } catch (error) {
        console.log(error);
        resPonse(res, false, null, 500, "Server Error", error);
    }
};

exports.getChautaroGroupTalkName = async (req, res) => {
    try {
        const groupTalkName = await ChautaroGroupTalkModel.find().populate(
            "createdBy",
            "members"
        );

        if (!groupTalkName) throw "Group Talk Name is not created yet";
        resPonse(res, true, groupTalkName, 200, "Chautaro Group Talk is found");
    } catch (error) {
        console.log(error);
        resPonse(res, false, null, 500, "Server Error", error);
    }
};

exports.getChautaroGroupTalkMessage = async (req, res) => {
    try {
        const payload = req.payload;
        if (!req.params.id) throw "Group Talk Message is required";

        const groupTalkMemberExist = await ChautaroGroupTalkModel.findOne({
            _id: req.params.id,
        })
            .populate(["createdBy", "members", "messages"])
            .populate({
                path: "messages",
                populate: {
                    path: "user",
                    model: "User",
                },
            });

        var memeberExist = false;
        groupTalkMemberExist.members.forEach((member) => {
            if (member?._id == payload?.id) {
                memeberExist = true;
            } else {
                memeberExist = false;
            }
        });

        if (
            groupTalkMemberExist.createdBy?._id.toString() === payload?.id ||
            memeberExist
        ) {
            resPonse(res, true, groupTalkMemberExist, 200, "found room");
            return;
        }
        const groupTalkMessage = await ChautaroGroupTalkModel.findOneAndUpdate(
            { _id: req.params.id },
            { $push: { members: payload?.id } },
            { new: true, useFindAndModify: false }
        )
            .populate(["createdBy", "members", "messages"])
            .populate({
                path: "messages",
                populate: {
                    path: "user",
                    model: "User",
                },
            });
        if (!groupTalkMessage) throw "Group Talk Message is not created yet";
        resPonse(
            res,
            true,
            groupTalkMessage,
            200,
            "Chautaro Group Talk Message is found"
        );
    } catch (error) {
        console.log(error);
        resPonse(res, false, null, 500, "Server Error", error);
    }
};

exports.createGroupMsg = async (req, res) => {
    try {
        if (!req.params.id) throw "Room is required";
        const { message } = req.body;
        if (!message) throw "Message is required";
        const payload = req.payload;
        const groupTalkMessage = await new ChautaroTalkModel({
            chautaroGroupTalk: req.params?.id,
            user: payload?.id,
            message,
        })
            .save()
            .populate("user");

        if (!groupTalkMessage) throw "Group Talk Message is not created yet";
        resPonse(
            res,
            true,
            groupTalkMessage,
            200,
            "Chautaro Group Talk Message is found"
        );
        await ChautaroGroupTalkModel.findOneAndUpdate(
            { _id: req.params?.id },
            { $push: { messages: groupTalkMessage._id } },
            { new: true, useFindAndModify: false }
        );
    } catch (error) {
        console.log(error);
        resPonse(res, false, null, 500, "Server Error", error);
    }
};
