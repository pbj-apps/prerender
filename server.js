#!/usr/bin/env node
var prerender = require('./lib');
var s3Cache = require('prerender-aws-s3-cache');
var server = prerender();

// server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(s3Cache);
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
