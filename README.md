# Homework #10 Solution

**Student Name**:  **Hemanvitha Karnatapu**

**NetID**: **UD4558**

# Question 1

## (a)

![solution_1a](images/solution_1a.png)

## (b)
![solution_1b](images/solution_1b.png)

```Code
const Bundler = require('parcel-bundler');
const express = require('express');
const proxy = require('http-proxy-middleware');
const app = express();
const forward = ['/tours'];
app.use(forward, proxy({target: 'http://127.0.0.1:1997'}));
const bundler = new Bundler('./index.html');
app.use(bundler.middleware());
app.listen(1234);
```
# Question 2

## (a)
```Code

```
![solution_2](images/solution_2.png)

# Question 3
## (a)
 Mocha is used for testing. 

 npm commands that are required for installation of mocha are: 

**npm install mocha**

We need to update the test scripts in package.json: 

"scripts": {
  "test": "mocha"
}

Then we will run following command to run the code for Testing : 

**$ ./node_modules/mocha/bin/mocha filename.js** and **npm filename**



## (b)

![Solution 3b](images/solution_3b.png)

# Question 4
## (a)
![Solution 4a](images/solution_4a.png)

## (b)

![Solution_4b.png](images/solution_4b.png)

# Question 5

## (a)
![Solution 5a](images/solution_5a.png)

## (b)
![Solution 5b](images/solution_5b.png)

