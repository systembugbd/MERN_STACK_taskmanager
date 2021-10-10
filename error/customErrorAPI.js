/**
 * Class CustomErrorApi
 * Custom Error Handler
 * @param message, statusCode
 */
class CustomErrorAPI extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

/**
 * @param {String} message
 * @param {String} statusCode
 * @returns Custome Error Object
 */
const createCustomError = (message, statusCode) => {
  return new CustomErrorAPI(message, statusCode);
};

module.exports = {
  CustomErrorAPI,
  createCustomError,
};
