/**
 *
 * @param {string} err
 * @param {request} req
 * @param {response} res
 * @param {next} next
 * @returns response string with 505 status
 */
const errorHandler = (err, req, res, next) => {
  return res.status(500).json({ message: err.message });
};

module.exports = errorHandler;
