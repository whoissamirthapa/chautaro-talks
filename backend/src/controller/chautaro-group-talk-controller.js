const ChautaroGroupTalk = require("../model/chautaro-group-talk");
const AuthModel = require("../model/user");

exports.createChautaroGroupTalkName = async (req, res, next) => {
    const { name } = req.body;

    const groupTalkNameExists = await ChautaroGroupTalk.findOne({ name });

    if (groupTalkNameExists) {
        throw "Group Talk Name already exists";
    }
    const payload = req.payload;

    const chautaroGroupTalkName = new ChautaroGroupTalk({
        name,
        description: req.body?.description,
        createdBy: payload._id,
    });

    await chautaroGroupTalkName.save();

    res.status(200).json({
        sucess: true,
        message: "Chautaro Group Talk is created",
    });
};
