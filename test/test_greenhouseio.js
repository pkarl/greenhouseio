var assert = require('chai').assert;

var greenhouse = require('../greenhouseio.js');
var AUTH = require('../keys.greenhouse.json');

// let's use greenhouse's own jobs for now
var COMPANY_NAME = "greenhouse";

// TODO: mock the responders via Sinon? - pk

/*

  desired API:

  var gh = Greenhouse("company_name", "API_key");

  gh.get('offices');

  gh.get('office', 81);

  gh.post('application', requestBody);

 */