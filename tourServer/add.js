// Only available to admin, returns updated tour list.
var express = require("express");
var app = express();
function checkAdminMiddleware(req, res, next) {
	if (req.session.user.role !== "admin") {
		res.status(401).json({error: "Not permitted"});;
	} else {
		next();
	}
};
var addTours = function(req, res) {
    res.sendfile("login.html");
  };
app.post('/addTour', addTours, checkAdminMiddleware, express.json(), function (req, res) {
    let temp = req.body;
    console.log(temp);
    // Note need to check input here to prevent injection attacks
    let event = {
        name: temp.name,
        place: temp.place,
        date: temp.date,
    };
    tours.push(event);
    res.json(tours);
    
});
app.listen(1234, function() {
    console.log("Server is running at http://localhost:1234/login");
});