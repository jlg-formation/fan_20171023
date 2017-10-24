'use strict';

const express = require('express'); // charge ExpressJS
const serveIndex = require('serve-index');

const app = express();

app.use(express.static('.'));

app.use(serveIndex('.', { icons: true }));

app.use(function (req, res, next) {
	console.log('404: Page not Found', req.url);
	next();
});

const port = 9000;

app.listen(port, function () {
	console.log('server started on port ' + port);
});
