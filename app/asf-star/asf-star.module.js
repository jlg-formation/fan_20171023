angular.module('asf-star', [])
	.directive('asfStar', function () {
		return {
			restrict: 'E',
			controller: function AsfStarCtrl($element) {
				'ngInject';
				console.log('AsfStarCtrl start', this, arguments);
				const html = '* * * * *';
				$element.html(html);
			}
		};
	});

