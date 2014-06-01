angular.module('xhr',[])
	//same domain
	.controller('same',function($http,$scope){
		$scope.getJSONData = function() {  
	        $http.get('data.json').
	        success(function(data) {
	            $scope.colors = data;
	        });
	    };
	    $scope.colors = [];
	});