var express = require('express');
var app = express();
var name = "Hemanvitha Karnatapu";
var id = "ud4558";
var d = new Date();

app.get('/together', function (req, res) {
    res.send(`Name : ${name}, NetId : ${id}   Date and time : ${d}`);
});
    port = 2020; // Or anything you'd like
    host = '127.0.0.1'; // Any loopback address
    app.listen(port, host, function () {
      console.log(`NetId app  and date & time are listening on ${host}:${port}/together`);
    });

