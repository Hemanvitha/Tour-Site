const DataStore = require('nedb-promises');
const db = DataStore.create(__dirname + '/tourDB');
const users = require('./tours.json');

async function initialize() { // so I can await!
    try {
        
        let newDocs = await db.insert(users);
        console.log(`Created tour database${newDocs.length}`);
    } catch (err) {
        console.log(`Database error: ${err}`);
    }
}

initialize(); 