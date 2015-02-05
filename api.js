var landingPages = require('./db.js')('landingpages');

module.exports = {
  getLandingPage: function *() {
    var page = yield landingPages.findOne({ name: this.params.name });

    if (page) {
      this.type = 'json';
      this.body = { page: page };
    }
  },

  getAllLandingPages: function*() {
    var pages = yield landingPages.find({}, 'name');
    this.type = 'json';
    this.body = { pages: pages };
  }
};
