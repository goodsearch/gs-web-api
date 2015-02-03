var koa      = require('koa');
var router   = require('koa-router');
var mount    = require('koa-mount');
var cors     = require('koa-cors');
var compress = require('koa-compress');
var config   = require('config');

var server = module.exports = koa();

process.env.MONGO_URL = process.env.MONGO_URL || config.get('mongoUrl');
server.use(cors({ credentials: true }));

server.use(compress({
  threshold:  2048,
  flush:      require('zlib').Z_SYNC_FLUSH
}));

var api = require('./api.js');
var APIRouter = new router();

// routes
APIRouter.get('/landing-pages.json', api.getAllLandingPages);
APIRouter.get('/landing-pages/:name.json', api.getLandingPage);

server.use(mount('/', APIRouter.middleware()));
server.listen(process.env.PORT || 8000);
