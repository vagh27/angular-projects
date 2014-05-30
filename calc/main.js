angular.module('calc',[])
	.controller('details',function ($scope,$rootScope){

		$scope.data = $scope.initial;

		$scope.submit = function(){
			if($scope.formDetails.$valid) $rootScope.$broadcast('displayCharges', $scope.data);
		}

		$scope.$on('clear', function(event, data) {
        	$scope.data = $scope.initial;
        	$scope.submitted = false;
        });
	})
	.controller('charges',function($scope,$rootScope){

		$scope.charges = $scope.initial;

		$scope.$on('displayCharges', function(event, data) {
            $scope.charges = data;
            $scope.charges.subtotal = $scope.charges.price * (1 + $scope.charges.tax/100),
            $scope.charges.tipamount = $scope.charges.price * ($scope.charges.tip/100),
            $scope.charges.total = $scope.charges.subtotal + $scope.charges.tipamount;

            //send this nonsense over to the earnings thing
            $rootScope.$broadcast('displayEarnings', $scope.charges);
        });

        $scope.$on('clear', function(event, data) {
        	$scope.charges = $scope.initial;
        });
	})
	.controller('earnings',function($scope,$rootScope){

		$scope.earnings = $scope.initial;

		var tiptotal = 0, mealcount = 0, avetip = 0;
		$scope.$on('displayEarnings', function(event, data) {

            $scope.earnings = data;

            //do this stuff
            tiptotal += $scope.earnings.tipamount,
            //mealcount++,
            avetip = tiptotal / mealcount;

            //set scope
            $scope.earnings.tiptotal = tiptotal;
            $scope.earnings.mealcount = mealcount;
            $scope.earnings.avetip = avetip;

            //why doesnt something like this work?
            //$scope.earnings.tiptotal += $scope.earnings.tipamount
        });
        $scope.$on('clear', function(event, data) {
        	$scope.earnings = $scope.initial;
        });
	})

	//seems like a freakish way to do this...
	.controller('all',function ($scope,$rootScope){
		$scope.clear = function(){
		    $rootScope.$broadcast('clear', $scope.data);
		}
	})

