/**
 * Custom error object  
 *
 * @author appr
 */

/**
 * Error constructor
 *
 * @param message
 * @param data
 * @param code
 */
function CustomError(message, data, code) {
    this.message = message;
    this.data = data;
    this.code = code;
}

CustomError.CODE_BAD_REQUEST = 400;
CustomError.CODE_UNAUTHORIZED = 401;
CustomError.CODE_FORBIDDEN = 403;
CustomError.CODE_NOT_FOUND = 404;
CustomError.CODE_420 = 420;
CustomError.CODE_SERVER_ERROR = 500;
CustomError.CODE_GATEWAY_TIMEOUT = 504;

/**
 * Convert error object into its string (JSON)
 * representation
 *
 */
CustomError.prototype.stringify = function() {
    var error = {};
    if (this.message) {
        error.message = this.message;
    }
    if (this.data) {
        error.data = this.data;
    }

    return JSON.stringify(error);
};

module.exports = CustomError;
