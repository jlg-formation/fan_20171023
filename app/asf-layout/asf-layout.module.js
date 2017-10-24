import asfHeaderHtml from './tmpl/asf-header.html';

angular.module('asf-layout', [])
	.component('asfHeader', {
		template: asfHeaderHtml
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

