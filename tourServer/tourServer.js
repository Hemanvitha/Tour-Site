var app = require('./app');

host = '127.0.0.1';
port = '1997';
app.listen(port, function () {
  console.log(`TourServer listening on localhost on port: ${host}:${port}`);
});
