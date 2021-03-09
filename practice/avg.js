const rp = require('request-promise-native');
var year = 2018;
var highest = 0 ;
var count;
var sum =0;
function logAdd(year, data) {
    console.log(`Year ${year}, sailing sessions = ${data.length}`);
    var fs = require('fs');
    var d = fs.readFileSync('data','utf-8');
    var  par = JSON.parse(data);
    for(var i=0;i<data.length; i++){
        sum += par[i].max10sec;
        count++;
    }
   average = sum / count ;
   console.log(`${average}`);
}

let site1 = {
    uri: 'https://windsurf.grotto-networking.com/data/logs/windEvents2019.json',
	json: true
};

rp(site1).then(logAdd.bind(null, year));



