/**
 *
 * @param {request} req
 * @param {response} res
 * @param {next} next
 * @returns response string with 404 status
 */
const notfound = (req, res, next) => {
  return res.status(404).send("404, Requested Route Not Found");
};

module.exports = notfound;
