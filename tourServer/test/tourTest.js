const app = require('../app');
const assert = require('chai').assert;
const request = require('supertest');
const cookie = require('cookie');

describe('Get Tour Tests', function () {
	let response;
	let tours = null;
	before(async function () {
		response = await request(app).get('/tours');
	})
	it('Everything is OK', async function () {
		assert.equal(response.status, 200);
	});
	it('Returns an array', function () {
		tours = JSON.parse(response.text);
		assert.isArray(tours);
	});
	it('All tour elements have name and date', function () {
		tours.forEach(function (tour) {
			assert.containsAllKeys(tour, ['name', 'date']);
		});
	});
	it('Cookie with appropriate name is returned', function () {
		let cookies = response.header['set-cookie'].map(cookie.parse);
		let mycookie = cookies.filter(c => c.hasOwnProperty('UD4558toursid'));
		assert.notEmpty(mycookie);
	});
})

describe("Get an individual tour", function () {
	var tours;
	var existingID1;
	var existingID2;
	var nonExistingID;
	before(async function () {
		var res = await request(app).get("/tours");
		tours = res.body;
		existingID1 = tours[0]._id;
		existingID2 = tours[1]._id;
		nonExistingID = "NotExistingId";
	})
	it('Get an existing tour', async function () {
		console.log("trying path tours/RdFMD9nAZQ1c7uhN");
		var res = await request(app).get("/tours/" + existingID1);
		tour = res.body[0];
		assert.equal(res.status, 200);
		assert.containsAllKeys(tour, ['name'], ['date']);
	})
	it('Get another	 existing tour', async function () {
		console.log("trying path tours/EQMZTsNlMxIrKO8j");
		var res = await request(app).get("/tours/" + existingID2);
		tour = res.body[0];
		assert.equal(res.status, 200);
		assert.containsAllKeys(tour, ['name'], ['date']);
	})
	it('Try getting a non existing tour', async function () {
		console.log("trying path tours/NotExistingId");
		var res = await request(app).get("/tours/" + nonExistingID);
		console.log("-------------------------", res.body);
		assert.equal(res.status, 404);
	})
})

