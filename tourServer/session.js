const express = require('express');
let app = express(); // Can't use const if exporting
const session = require('express-session');
const bcrypt = require('bcryptjs');

const cookieName = "UD4558 toursid"; // Session ID cookie name, use this to delete cookies too.
app.use(session({
	secret: 'website development for tours',
	resave: false,
	saveUninitialized: false,
	name: cookieName // Sets the name of the cookie used by the session middleware
}));
const users = require('./usersDB');
const tours = require('./tour.json');

function setUpSessionMiddleware(req, res, next) {

	if (!req.session.user) {
		req.session.user = {role: "guest"};
	};
	next();
};

app.use(setUpSessionMiddleware);
port = 1997;
host = '127.0.0.1';
app.listen( port, host);