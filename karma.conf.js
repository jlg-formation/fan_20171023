const webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
	'use strict';

	config.set({

		basePath: '.',

		files: [
			'test/unit/AsfStarCtrl.controller.test.js',
		],

		preprocessors: {
			'test/unit/*.test.js': ['webpack']
		},

		webpack: webpackConfig,

		autoWatch: true,
		frameworks: ['jasmine'],
		browsers: ['PhantomJS'],
	});
};
