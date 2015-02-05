module.exports = function(collectionName) {
  var monk = require('monk');
  var wrap = require('co-monk');
  var db   = monk(process.env.MONGO_URL);

  return wrap(db.get(collectionName));
};
