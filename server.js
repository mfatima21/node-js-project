
const http=require('http');
const app = require("./app");

const port = process.env.PORT || 3000;

/**
 * Start Express server.
 */
 const server = app.listen(port, () => {
    console.log(
      "  App is running at http://localhost:%d in %s mode",
      app.get("port"));
    console.log("  Press CTRL-C to stop\n");
  });
  
  module.exports = server;