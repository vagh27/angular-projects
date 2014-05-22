angular.module('module',[])
	.constant('VERSION', 1.1)
	.run(function(VERSION, $rootScope) {
	    $rootScope.version = VERSION;
	})
	.controller('wrapper',function(VERSION,$scope){
		$scope.version = '3';
	});