export const ProductCtrl = function($http,$q) {
	'ngInject';
	this.start = () => {
		console.log('Start');
		$http.get('../ws/s1').then(response => {
            console.log('response', response);
            return $q.all([
                $http.get('../ws/s2').then(response => {
                    console.log('response', response);
                    return $http.get('../ws/s5');
                }),
                $http.get('../ws/s3'),
                $http.get('../ws/s4'),
            ]);
		}).catch(error => {
			console.error('error', error);
		});
	};
};
