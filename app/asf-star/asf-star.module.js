angular.module('asf-star', [])
	.directive('asfStar', function () {
		return {
			restrict: 'E',
			controller: function AsfStarCtrl() {
				console.log('AsfStarCtrl start', this, arguments);
				
			}
		}
	});

