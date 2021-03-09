const rp = require('request-promise-native'); let options = {
    uri: 'http://127.0.0.11:1711/tours/add',
    json: true,
    method: "POST",
    body: {name: "Windsurf K2-18b, 110 Light Years",
    date: "Sometime in 2025"} 
  rp(options).then(function(data){
        data.forEach(function(tour, i) {
            console.log(`Tour ${i+1} name ${tour.name}, date: ${tour.date}`);
            }); }).catch(function(err){
                console.log(`Error: ${err}`);
     })    