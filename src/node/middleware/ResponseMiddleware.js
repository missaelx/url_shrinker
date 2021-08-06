const ERRORS = Object.freeze({
    TOKEN_ABSENT: 1,
    INVALID_TOKEN: 2,
    VALIDATION: 3,
    INVALID_CREDENTIALS: 4
});

export default (req, res, next) => {
    res.sendResponse = (message = "", status = res.status, data, error_code) =>  {
        return res.status(status).json({
            status,
            message,
            data,
            error_code,
        })
    }

    res.sendOk = (data) => {
        return res.sendResponse("", 200, data);
    }

    res.badRequest = message => {
        return res.sendResponse(message, 400);
    }
    res.unauthorized = message => {
        return res.sendResponse(message, 401);
    }
    res.forbidden = message => {
        return res.sendResponse(message, 403);
    }
    res.notFound = message => {
        return res.sendResponse(message, 404);
    }

    res.serverError = message => {
        return res.sendResponse(message, 500);
    }

    res.validationError = (validationErrors) => {
        return res.sendResponse("The input provided is incorrect, check it out.", 400, validationErrors, ERRORS.VALIDATION);
    }

    res.tokenAbsent = () => {
        return res.sendResponse("Token absent", 401, undefined, ERRORS.TOKEN_ABSENT)
    }
    res.invalidToken = () => {
        return res.sendResponse("Invalid token", 401, undefined, ERRORS.INVALID_TOKEN)
    }

    res.invalidCredentials = () => {
        return res.sendResponse("Invalid credentials", 401, undefined, ERRORS.INVALID_CREDENTIALS)
    }
    res.sendData = (data, message = "") => {
        return res.sendResponse(message, 200, data, undefined);
    }
    next();
}