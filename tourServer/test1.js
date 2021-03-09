var express = require("express");
var bodyParser = require("body-parser");
var bcrypt = require("bcryptjs");
var usersInfo = require("../tourServer/userTourHash.json");

var app = express();

// parse application/json
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

var getTours = function(req, res) {
  res.sendfile("login.html");
};

var doLogin = function(req, res) {
  var email = req.body.email;
  var password = req.body.password;
  var errorData = {
    error: true,
    message: "User/Password error"
  };

  var resData;
  for (var i = 0; i < usersInfo.length; i++) {
    if (email !== usersInfo[i].email) {
      resData =
        "Code-401,error: true, message: User/Password error " +
        JSON.stringify(errorData);

    } else {
      if (bcrypt.compare(password, usersInfo[i].password)) {
        delete usersInfo[i]["password"];
        resData = JSON.stringify(usersInfo[i]);
      } else {
        resData =
          "Code-401,error: true, message: User/Password error" +
          JSON.stringify(errorData);
        
      }
      break;
    }
  }

  console.log(resData);
  res.send(resData);
};

app.get("/login", getTours);
app.post("/login", doLogin);
app.listen(1234, function() {
  console.log("Server is running at http://localhost:1234/login");
});
