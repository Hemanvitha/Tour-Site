const dataBase = require('nedb-promises');
const db = new dataBase({filename: __dirname + '/toursDB', autoload: true});
const tours = require('./tour.json');

async function begin() {
    try{
        let base = await db.insert(tours);
        console.log(`databse for the tours are created with ${base.length} tours`);
        db.remove();
    }
    catch (err){
        console.log(`failed to create database with error: ${err}`);

    }
}
begin();


module.exports = db;