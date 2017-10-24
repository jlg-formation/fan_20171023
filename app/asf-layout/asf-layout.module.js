(function () {
	'use strict';

	angular.module('asf-layout', [])
		.component('asfHeader', {
			template: `headerx
			<hr>
			`
		})
		.directive('asfBody', function () {
			return {
				restrict: 'E',
				templateUrl: './asf-layout/tmpl/asf-body.html'
			}
		})
		.directive('asfFooter', function () {
			return {
				restrict: 'E',
				templateUrl: './asf-layout/tmpl/asf-footer.html'
			}
		});




})();
