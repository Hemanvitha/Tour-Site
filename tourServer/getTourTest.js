var express = require('express');
var app = express();
app.use(express.static('public')); // For static assets

const fs = require('fs')
// var obj = JSON.parse(JSON.stringify(data));

app.get('/', function (req, res) {

  res.json(data);
});

host = '127.0.0.1';
port = '1997';
app.listen(port, host, function () {
  console.log(`TourServer running on IPv4: ${host}:${port}`);

  var contents = fs.readFileSync('../tourServer/tour.json');
  var jsonContent = JSON.parse(contents);
  const name = jsonContent.map(info => info.name);
  const city = jsonContent.map(info => info.place);
  const date = jsonContent.map(info => info.date);

  for (i = 0; i < jsonContent.length; i++) {
    console.log("Tour", i + 1, "Name: ", name[i], ",", "Place:", city[i], ",", "Date: ", date[i]);
  }

}); 