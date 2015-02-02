var koa       = require('koa');
var router    = require('koa-router');
var mount     = require('koa-mount');
var cors      = require('koa-cors');
var server    = koa();

process.env.MONGO_URL = process.env.MONGO_URL || 'localhost/gs-web';
server.use(cors({ credentials: true }));

var api = require('./api.js');
var APIRouter = new router();

// routes
APIRouter.get('/landing-pages.json', api.getAllLandingPages);
APIRouter.get('/landing-pages/:name.json', api.getLandingPage);

server.use(mount('/', APIRouter.middleware()));
server.listen(process.env.PORT || 8000);
