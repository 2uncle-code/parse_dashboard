let express = require('express');
let ParseDashboard = require('parse-dashboard');
let dotnev = require('dotenv');
const apps = require('./servers');

dotnev.config();
const config = process.env;


let dashboard = new ParseDashboard({

  "apps": apps,
  "users": [
    {
      "user": config.admin,
      "pass": config.pwd
    }
  ],

}, {
    allowInsecureHTTP: true
  }
);

let app = express();

// make the Parse Dashboard available at /dashboard
app.use(process.env.MountPath, dashboard);

let httpServer = require('http').createServer(app);
httpServer.listen(process.env.port, () => {
  console.log('admin dashboard is  running on port %s.', process.env.port);
});