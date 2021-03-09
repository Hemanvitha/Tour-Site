const data = require('nedb-promises');
const db1 = new data({filename: __dirname + '/usersDB', autoload: true});

const users = require('./userTourHash.json');

async function initialize() {
    try {
        let dbase = await db.insert(users);
        console.log(`users database ${dbase.length} `);
    }
    catch (err) 
    {
        console.log(`Database error ${err}`);
    }
}
initialize();

module.exports = db1;