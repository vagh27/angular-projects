angular.module('form',[])
	.controller('FormCtrl',function($scope){
		$scope.submit = function() {
			if($scope.myForm.$valid) console.log('Form Submitted: ', $scope.data);
    		else console.log('The form is invalid');
		}
	});