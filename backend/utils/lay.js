const { resPonse } = require("./res");

exports.LayoutTryCatch = (res, customError, callback) => {
    try {
        callback();
    } catch (error) {
        resPonse(res, false, null, 500, customError, error);
    }
};
