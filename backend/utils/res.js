exports.resPonse = (res, success, data, status = 200, customError, error) => {
    if (success) {
        return res.status(status).json({
            success: success,
            data,
            message: customError,
        });
    }
    res.status(status).json({
        success: success,
        error: customError,
        devError: error,
    });
};
