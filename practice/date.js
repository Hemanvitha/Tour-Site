var express = require('express');
var app = express();
var d = new Date();

app.get('/date', function (req, res) {
    res.send(`Date and time : ${d}`);
});
    port = 8080; // Or anything you'd like
    host = '127.0.0.1'; // Any loopback address
    app.listen(port, host, function () {
      console.log(`Date time app listening  on : ${host}:${port}/date`);
    });
