const ChautaroGroupTalk = require("../model/chautaro-group-talk");

exports.createChautaroGroupTalkName = async( req, res, next ) => {
    const { name } = req.body;

    const groupTalkNameExists = await ChautaroGroupTalk.findOne({ name });

    if( groupTalkNameExists ){
        throw "Group Talk Name already exists"
    }

    const chautaroGroupTalkName =  new ChautaroGroupTalk({ name });

    await chautaroGroupTalkName.save();

    res.status(200).json({
        sucess: true,
        message: "Chautaro Group Talk is created",
    })
}