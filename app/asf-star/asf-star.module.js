import {AsfStarCtrl} from './AsfStarCtrl.controller.js';

angular.module('asf-star', [])
	.component('asfStar', {
		bindings: {
			n: '=?note'
		},
		controller: 'AsfStarCtrl'

	})
	.controller( 'AsfStarCtrl', AsfStarCtrl);
