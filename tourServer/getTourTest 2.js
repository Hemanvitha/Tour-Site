/* Testing the GET /tours API */
const rp = require('request-promise-native');
let options = {
	uri: 'http://127.0.0.1:1997/tours',
	json: true
};

rp(options).then(function(data){
	data.forEach(function(tour, i) {
		console.log(`Tour ${i+1} name ${tour.name}, date: ${tour.date}`);
	});
}).catch(function(err){
	console.log(`Error: ${err}`);
})
