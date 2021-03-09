var express = require('express');
var app = express();
var name = "Hemanvitha Karnatapu";
var id = "ud4558";

app.get('/data', function (req, res) {
    res.send(`Name : ${name}, NetId : ${id}`);
});
    port = 1818; // Or anything you'd like
    host = '127.0.0.1'; // Any loopback address
    app.listen(port, host, function () {
      console.log(`NetId app listening on ${host}:${port}/data`);
    });

