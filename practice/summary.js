const rp = require('request-promise-native');

var year = 2018;
var i;
var res = 20.71;
var res1 = 12.89;
var average = 0;
var count = 0;
var count1 = 0;
function summary(year,data) {
    console.log(`The number of sailing sessions in the Year ${year} is  ${data.length}`);
  
       for( i= 1 ; i<data.length; i++){
      if(res < data[i].max10sec){
          res = data[i].max10sec;
       count ++;
      }  
      else
    {
  count = 0;
    }  
    }
    if(count == 0)
     {console.log(`The fastest max 10 seconds is : ${res}`)}
    
for( var j= 1 ; j<data.length; j++){
      if(res1 < data[j].distance){
          res1 = data[j].distance;
       count1 ++;
      }  
      else
    {
  count1 = 0;
    }  
    }
    if(count1 == 0)
     {console.log(`The fastest distance is : ${res1}`)}

}

let site = {
    uri: 'https://windsurf.grotto-networking.com/data/logs/windEvents2018.json',
    json: true
};

rp(site).then(summary.bind(null,year));

