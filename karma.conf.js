module.exports = function(config) {
	'use strict';

	config.set({

		basePath: '.',

		files: [
		'node_modules/angular/angular.js',
		],

		autoWatch: true,
		frameworks: ['jasmine'],
		browsers: ['Firefox', 'Chrome'],
	});
};
