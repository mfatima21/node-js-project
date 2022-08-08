const { createLogger, format, transports } = require('winston');
var os = require("os");
const dotenv = require("dotenv");
dotenv.config();
const httpTransportOptions = {
  host: 'http-intake.logs.datadoghq.com',
  path: `/api/v2/logs?dd-api-key=${process.env.DATADOG_API_KEY}&ddsource=nodejs&service=node-js-sample-project&hostname=${os.hostname}`,
  ssl: true,
};

const logger = createLogger({
  level: 'info',
  exitOnError: false,
  format: format.json(),
  transports: [
    new transports.Http(httpTransportOptions),
  ],
});

module.exports={logger};