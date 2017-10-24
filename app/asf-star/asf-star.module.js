angular.module('asf-star', [])
	.directive('asfStar', function () {
		return {
			restrict: 'E',
			scope: {
				n: '=?note'
			},
			controller: function AsfStarCtrl($scope, $element, $compile) {
				'ngInject';
				console.log('AsfStarCtrl start', this, arguments);

				$scope.update = newNote => {
					console.log('update ', newNote, this);
					$scope.n = newNote;
				};

				$scope.$watch('n', function () {
					let html = '';
					let note = Math.floor(+$scope.n) || 0;

					note = (note > 5) ? 5 : note;
					note = (note < 0) ? 0 : note;

					for (let i = 0; i < note; i++) {
						html += `
						<img ng-click="update(${i + 1})" src="./asf-star/img/yellow_star.png">
						`;
					}
					for (let i = note; i < 5; i++) {
						html += `
						<img ng-click="update(${i + 1})" src="./asf-star/img/white_star.png">
						`;
					}
					$element.html(html);
					$compile($element.contents())($scope);
				});
			}
		};
	});

