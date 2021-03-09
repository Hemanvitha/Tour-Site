var express = require("express");
var bodyParser = require("body-parser");
var app = express();

const fs = require('fs');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
  res.sendfile("index.html");
});
app.post('/tour', function (req, res) {
  var data = req.body;
  var tour_name = req.body.name;
  var tour_place = req.body.place;
  var tour_date = req.body.date;
  var i = 4;
  console.log("Tour "+ i ,"Name: " , tour_name , ", Place: " , tour_place , ", Date: " , tour_date);
  var contents = fs.readFileSync('../tourServer/tour.json');
  var jsonContent = JSON.parse(contents);
  jsonContent.push(data);
  i= i+1;
  res.end(JSON.stringify(req.body));
});
host = '127.0.0.1';
port = '1997';

app.listen(port, host, function () {
  console.log(`AddTourTest running on IPv4 ${host}:${port}`);
  var contents = fs.readFileSync('../tourServer/tour.json');
  var jsonContent = JSON.parse(contents);
  const name = jsonContent.map(info => info.name);
  const place = jsonContent.map(info => info.place);
  const date = jsonContent.map(info => info.date);

  for (i = 0; i < jsonContent.length; i++) {
    console.log("Tour", i + 1, "Name: ", name[i], ",", "Place:", place[i], ",", "Date: ", date[i]);
  }
})