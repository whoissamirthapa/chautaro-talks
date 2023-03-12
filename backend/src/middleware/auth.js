const jwt = require("jsonwebtoken");
const { resPonse } = require("../../utils/res");

module.exports = async (req, res, next) => {
    try {
        if (!req.headers.authorization) {
            throw "Forbidden 🚫🚫";
        }

        const token = req.headers.authorization.split(" ")[1];

        jwt.verify(token, process.env.SCRET, (err, decoded) => {
            if (err) {
                console.log(err);
                throw "Forbidden 🚫🚫";
            }

            req.payload = decoded;
        });

        next();
    } catch (error) {
        resPonse(
            res,
            false,
            null,
            401,
            "Unauthorized 🚫🚫",
            "You are not authorized to access this route",
            error
        );
    }
};
