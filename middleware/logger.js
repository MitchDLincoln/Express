const moment = require("moment");

const logger = (req, res, next) => {
    console.log("Ciò, C O L I O N E");
    console.log(
      `${req.protocol}://${req.get("host")}${req.originalUrl}:${moment().format()}`
    );
    next();
  };

  module.exports = logger;