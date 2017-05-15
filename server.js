require('babel-register');
var express = require('express');
var app = express();
var fs = require('fs');
require('app-module-path').addPath(__dirname + '/src/Layout');

import Layout from 'Layout/Layout.js';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

var template = fs.readFileSync(__dirname + '/docs/index.html', "utf8");

console.log(template);

app.set('port', (process.env.PORT || 5000));

app.get('/', function (req, res) {
  var layout = ReactDOMServer.renderToString(<Layout/>);
  console.log(layout);
  res.send(template.replace('#{{layout}}',layout));
});

app.use(express.static(__dirname + '/docs'));


app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

