'use strict';
import 'angular';
import 'angular-mocks';
import '../../app/asf-star/asf-star.module.js';

describe('asf-star', function() {
	beforeEach(angular.mock.module('asf-star'));

	describe('AsfStarCtrl', function() {
		var scope, ctrl;
		beforeEach(inject(function($rootScope, $controller) {
			scope = $rootScope.$new();
			ctrl = $controller('AsfStarCtrl', { $scope: scope, $element:{}});
		}));

		it('should update to 3', function() {

			ctrl.update(3);
			expect(ctrl.n).toEqual(3);
		});
	});
});
