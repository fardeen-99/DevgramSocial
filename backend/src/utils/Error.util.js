class ErrorHandler extends Error {
    constructor(statusCode, message) {
        super(message);
        const code = Number(statusCode);
        this.statusCode = Number.isFinite(code) ? code : 500;

        Error.captureStackTrace(this, this.constructor);
    }
}

module.exports = ErrorHandler



