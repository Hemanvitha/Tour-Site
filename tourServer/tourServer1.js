const express = require('express');
const app = express();
var bodyParser = require("body-parser");
const bcrypt = require('bcryptjs');
const fs = require('fs');
var session = require('express-session');
var cookieParser = require('cookie-parser');
//const users = require('./userTourHash.json');
const Datastore = require('nedb-promises');
let tourDB = new Datastore({ filename: './toursDB', autoload: true });
let usersDB = new Datastore({ filename: './userDB', autoload: true });
var users = fs.readFileSync('../tourServer/userTourHash.json');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const cookieName = "ab4489toursid";
app.use(session({
  secret: 'rohan kumar',
  resave: false,
  saveUninitialized: false,
  name: cookieName
}));

const setUpSessionMiddleware = function (req, res, next) {
  if (!req.session.user) {
    req.session.user = { role: 'guest' };
  }
  next();
}

app.use(setUpSessionMiddleware);

var getTours = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var toursData = await tourDB.find({});
  res.json(toursData);
}

var getNumberOfTours = async function (req, res) {
  res.setHeader('Content-Type', 'application/json');
  var toursData = await tourDB.find({});
  res.json(toursData[0].length);
}

var addTours = async function (req, res) {
  var tour = req.body;
  var tourType = req.query.tourType;

  var toursData = await tourDB.find({});
  var Tours = toursData[0];
  var tempTours;

  if (typeof (tourType) != "undefined") {
    tempTours = Tours.slice(0);
    tempTours.push(tour);
    await tourDB.update({ Tours: Tours },
      { Tours: tempTours }, {}, function (err, numUpdated) {
      });
  }
  else {
    console.log("tourType is undefined...");
  }
  res.send(toursData);
}

var doLogin = async function (req, res) {
  var loginData = req.body;
  var email = loginData.email;
  var password = loginData.password;
  var errorData = {
    "error": true,
    "message": "User/Password error"
  };
  var user;
  if (typeof (email) != "undefined" && typeof (password) != "undefined") {
    user = await usersDB.findOne({ email: email });
    if (!user) {
      res.json(JSON.stringify(errorData));
    }
    else {
      let verified = bcrypt.compareSync(password, user.password);
      if (verified) {
        var oldUserInfo = req.session.user;
        req.session.regenerate(function (err) {
          if (err) {
            console.log(err);
          }

          let newUserInfo = Object.assign(oldUserInfo, user);
          delete newUserInfo.password;
          req.session.user = newUserInfo;
          console.log("Changing session.user when login : ", req.session.user);
          res.json(newUserInfo);
        });
      }
      else {
        res.json(JSON.stringify(errorData));
      }
    }
  }
  else {
    resData = "Bad login data : StatusCodeError: 401 - " + JSON.stringify(errorData);
  }
}

var doLogout = function (req, res) {
  let options = req.session.cookie;
  req.session.destroy(function (err) {
    if (err) {
      console.log(err);
    }
    res.clearCookie(cookieName, options);
    res.json({ message: 'GoodBye' });
  });
}

var checkAdmin = function (req, res, next) {
  var err = { "error": "Not Permitted" };
  if (req.session.user.role !== 'admin') {
    var errString = "StatusCodeError: 401 - " + JSON.stringify(err);
    res.json(errString);
  }
  else {
    next();
  }
}

var checkCustomer = function (req, res, next) {
  var err = { "error": "Not Permitted" };
  if (req.session.user.role !== 'customer') {
    var errString = "StatusCodeError: 401 - " + JSON.stringify(err);
    res.json(errString);
  }
  else {
    next();
  }
}

app.get('/tours', getTours);
app.get('/count/tour', getNumberOfTours);
app.post('/tours/add', checkAdmin, addTours);
app.post('/login', express.json(), doLogin);
app.get('/logout', doLogout);


host = '127.0.0.1';
port = '1711';
app.listen(port, host, function () {
  console.log(`TourServer listening on IPv4: ${host}:${port}`);
});
