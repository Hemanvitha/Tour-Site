
const rp = require('request-promise-native');


var year = 2018;

function logAdd(year, data) {
    var start = data.start_time;
    var po = data.points;
    var oin = po.length;
    var point = oin/60;
	console.log(`start_time of tract : ${start} \n the session lasted for : ${point} minutes`);
};

let site1 = {
    uri: 'https://windsurf.grotto-networking.com/data/tracks/track_2018_07_07.json',
	json: true
};

rp(site1).then(logAdd.bind(null, year));



