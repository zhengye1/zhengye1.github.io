var app = angular.module('VincentGitPage', ['ngRoute'])
				.config(['$routeProvider', 
					function($routeProvider){
						$routeProvider.
							when('/contact', {
								templateUrl: 'views/contact.html'
							})
						.when('/code', {
							templateUrl:'views/code.html'
						});
					}]);
