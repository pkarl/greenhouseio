# Greenhouse.io API

This is a quick little module that provides basic support for the Greenhouse.io API. Some light error messages and configuration to help you along your way.

## Installation

`npm install greenhouseio`

## Usage

```javascript
var GreenhouseIO = require('greenhouseio');

var gh = GreenhouseIO('your company name', 'your API key')
```

```javascript
// gh return a thenable
var response = gh.request(...);
response.then(function(rsp) {}).catch(function(err) {});

gh.request('offices');
gh.request('office', { id: params.id });
gh.request('departments').then(function(response) {
    res.send(response);
});

// If POST'ing with node/express, be sure to config properly
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

var gh = ...

gh.request('application', { postBody: req.body });
```