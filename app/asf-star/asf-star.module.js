angular.module('asf-star', [])
	.directive('asfStar', function () {
		return {
			restrict: 'E',
			controller: function AsfStarCtrl($element) {
				'ngInject';
				console.log('AsfStarCtrl start', this, arguments);
				let html = '';
				let note = 3;
				for (let i = 0; i < note; i++) {
					html += `
					<img src="./asf-star/img/yellow_star.png">
					`;
				}
				for (let i = note; i < 5; i++) {
					html += `
					<img src="./asf-star/img/white_star.png">
					`;
				}
				$element.html(html);
			}
		};
	});

