const rp = require('request-promise-native');

let cookieJar = rp.jar();

let site1 = {
  uri: 'http://localhost:3000/tours/add',
  method: 'POST', // What does this do?
  body: {
    "name": "Nanda Devi",
    "place": "Uttarakhand",
    "date": "5-20-2019"
  },
  json: true,
  resolveWithFullResponse: true,
  jar: cookieJar
};

let adminLogin = {
  uri: "http://localhost:3000/login",
  method: 'POST', // What does this do?
  body: {
    "email": "antisun1921@outlook.com",
    "password": "R.r<E&xt"
  },
  json: true,
  resolveWithFullResponse: true,
  jar: cookieJar
}

let customerLogin = {
  uri: "http://localhost:3000/login",
  method: 'POST', // What does this do?
  body: {
    "email": "stedhorses1903@yahoo.com",
    "password": "nMQs)5Vi"
  },
  json: true,
  resolveWithFullResponse: true,
  jar: cookieJar
}

let getToursCount = {
  uri: "http://localhost:3000/count/tour",
  method: 'GET',
  json: true,
  resolveWithFullResponse: true,
  jar: cookieJar
};

let getTours = {
  uri: "http://localhost:3000/login",
  method: 'GET',
  json: true,
  resolveWithFullResponse: true,
  jar: cookieJar
};

let logout = {
  uri: "http://localhost:3000/logout",
  method: 'GET',
  jar: cookieJar
};

async function test() {
  console.log("Test 1: Admin Login, add tour");

  var admin = await rp(adminLogin);
  console.log("Admin login test result: ", admin.body);
  console.log("After admin login, Cookies: ", cookieJar.getCookieString(site1.uri));

  var toursCount = await rp(getToursCount);
  console.log("Admin visit, number of tours : ", toursCount.body);

  var addTour = await rp(site1);
  toursCount = await rp(getToursCount);
  console.log("Admin add tour test, number of tours: ", toursCount.body);

  rp(logout);
  var tourData = await rp(getTours);
  console.log("After logout, Cookies : ", cookieJar.getCookieString(logout.uri));


  console.log("\n\nTest 2 : Customer add tour");

  var customer = await rp(customerLogin);
  console.log("Customer login test result : ", customer.body);
  console.log("After customer login, Cookies : ", cookieJar.getCookieString(customerLogin.uri));

  toursCount = await rp(getToursCount);
  console.log("Customer visit, number of tours : ", toursCount.body);
  addTour = await rp(site1);
  console.log("Customer add tour error : ", addTour.body);
  rp(logout);

  console.log("\n\nTest 3 : Guest add tour");
  toursCount = await rp(getToursCount);
  console.log("Guest visit, number of tours: ", toursCount.body);

  tours = await rp(getTours);
  console.log("After guest visit, Cookies: ", cookieJar.getCookieString(getTours.uri));
  addTour = await rp(site1);
  console.log("Guest add tour error: ", addTour.body);

}

test().catch(function (err) {
  console.log(err);
});
