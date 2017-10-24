(function () {
	'use strict';

	angular.module('asf-layout', [])
	.directive('asfHeader', function() {
		return {
			restrict: 'E',
			templateUrl: './asf-layout/tmpl/asf-header.html'
		}
	})
	.directive('asfBody', function() {
		return {
			restrict: 'E',
			templateUrl: './asf-layout/tmpl/asf-body.html'
		}
	})
	.directive('asfFooter', function() {
		return {
			restrict: 'E',
			templateUrl: './asf-layout/tmpl/asf-footer.html'
		}
	});



	
})();
