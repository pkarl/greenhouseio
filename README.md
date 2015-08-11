# Greenhouse.io API

This is a quick little module that provides basic support for the Greenhouse.io API. Some light error messages and configuration to help you along your way.

It's promise-based (uses request-promise), so `.then` away!

## Installation

`npm install greenhouseio`

## Usage

```javascript
var GreenhouseIO = require('greenhouseio');

var gh = GreenhouseIO('your company name', 'your API key')
```

### get requests
```javascript

gh.request('offices');
// returns `{"offices":[{"id":4322,"name":"Boston (HQ) ","departments":[{"id":7002...

gh.request('office', { id: params.id });

gh.request('departments').then(function(response) {
    res.send(response);
});

```

### post requests (applications)
```javascript

// NOTE: if you're using express, you must configure it to process the form post body!
var bodyParser = require('body-parser');
var multer = require('multer');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// ...then create your gh instance
var gh = GreenhouseIO('your company name', 'your API key')

// then post away
gh.request('application', { postBody: req.body });

// NOTE: only active jobs can accept posted responses, log into your Greenhouse.io console to see your applications

```

### promises / thenables

```javascript
// gh will always returns a thenable
var response = gh.request(...);
response.then(function(rsp) {
    // do a response thing
}).catch(function(err) {
    // do an error thing!
});
```