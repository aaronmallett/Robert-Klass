(function(){


angular.module('wake-up', ['ngRoute'])
.config(['$routeProvider', function($routeProvider){

	// add a page in this structure
	// and create a new page.html
	$routeProvider.when('/page1',{
		templateUrl: 'page1.html'
	})
	.when('/page2',{
		templateUrl: 'page2.html'
	})
	.otherwise({redirectTo: '/page1'});
}])


})();