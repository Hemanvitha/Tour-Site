const fs = require('fs');
const users = require('./usersTour.json');
let nRounds = 13;
let hashedUsers = [];
const start = new Date(); // timing code
console.log(`Starting password hashing with nRounds = ${nRounds}, ${start}`);

// Your code here to process the passworkds

var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(nRounds);
for( var i = 0; i < users.length; i++)
{
    var hash = bcrypt.hashSync('users[i].password', salt);
    hashedUsers.push({
        FirstName: users[i].firstName,
        LastName: users[i].lastName,
        email: users[i].email,
        password: hash,
        role: users[i].role
   });
}
let elapsed = (new Date() - start); // timing code
console.log(`Finished password hashing ${elapsed/1000} seconds.`);
fs.writeFileSync("userTourHash.json", JSON.stringify(hashedUsers, null, 2));