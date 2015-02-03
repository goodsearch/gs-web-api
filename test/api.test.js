var api             = require('../index.js');
var request         = require('co-supertest').agent(api.listen());
var expect          = require('chai').expect;
var databaseCleaner = new require('database-cleaner')('mongodb');
var connect         = require('mongodb').connect;

describe('no records in db', function() {
  describe('/landing-pages.json', function() {
    it('returns no pages json', function *() {
      var res = yield request.get('/landing-pages.json').expect(200).end();
      expect(res.text).to.equal("{\"pages\":[]}");
    });
  });

  describe('/landing-pages/:name.json', function() {
    it('returns a 404', function *() {
      yield request.get('/landing-pages/testing.json').expect(404).end();
    });
  });
});
