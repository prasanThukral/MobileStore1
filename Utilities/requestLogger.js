const fs = require("fs");
const { promisify } = require("util");

const appendFile = promisify(fs.appendFile);

const requestLogger = async (req, res, next) => {
  try {
    const loggers = `${new Date()} - ${req.method} - ${req.url} \n`;
    await appendFile("RequestLogger.log", loggers);
    next();
  } catch (error) {
    next(error);
  }
};
module.exports = { requestLogger };
