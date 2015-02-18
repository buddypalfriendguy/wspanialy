/*angular.module("myFirstApp",[  
	])

.controller('index', [ '$scope' function($scope) {

			$scope.datar = 'Eureka!';

		}


	]);*/

var app = angular.module("myFirstApp", []);

app.controller('index', [ function($scope) {

//.controller('index', [ '$scope' function($scope) {

			$scope.datar =
			{
				message = 'Eureka!';
			}
			

		}


	]) 

;