angular.module('multiply',[])
	.controller('table',function ($scope,$attrs,$rootScope){
		function populateNumbers(x){
			var numbers = [];
			for(var i=0; i < x ; i++){
				numbers[i] = i +1;
			}
			return numbers;
		}

		$scope.$watch('numberLimit', function(limit) {
		    $scope.numbers = populateNumbers(limit);
		  });
		$scope.numberLimit = $attrs.initialNumberLimit || 10;
    	
    	$scope.compute = function(a,b){ return a * b; };

    	var activeFactorA, activeFactorB;
		$scope.setActiveFactors = function(a, b) {
			activeFactorA = a;
			activeFactorB = b;
		};

		$scope.matchesFactor = function (a, b) {
			//console.log(a)
			return a === activeFactorA || b === activeFactorB;
		};

		$scope.clearActiveFactors = function() {
		  activeFactorA = activeFactorB = null;
		};

		$scope.setActiveNumber = function(number) {
    		$rootScope.$broadcast('displayData', number);
  		};
	})
	.controller('DisplayCtrl', function($scope) {
	    $scope.$on('displayData', function(event, data) {
	    	$scope.content = data;
	    });
	})