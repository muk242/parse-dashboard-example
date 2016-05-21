// Example express application adding the parse-dashboard module to expose Parse Dashboard compatible API routes.

var express = require('express');
var ParseDashboard = require('parse-dashboard');
var path = require('path');

var dashboard = new ParseDashboard({
  apps: [
    {
      appId: process.env.APP_ID || 'gT3EHojAVlvtjgiZM1854EKMvFFftvL14KhrbzCe',
      masterKey: process.env.MASTER_KEY || 'QiRYWtWkX6RJjELTb1Uyv5o0Yd78IUwsC39iaCbn',
      serverURL: process.env.SERVER_URL || 'https://mm-parse-test.herokuapp.com/parse',
      appName: process.env.APP_NAME || 'Dev_Heroku',
    },
  ],
  
  "users": [
    {
      "user":"uuu",
      "pass":"ppp"
    }
  ]
});

var app = express();
app.enable('trust proxy');

// make the Parse Dashboard available at /
app.use('/', dashboard);

var port = process.env.PORT || 4040;
var httpServer = require('http').createServer(app);
httpServer.listen(port, function() {
  console.log('parse-dashboard-example running on port ' + port + '.');
});
