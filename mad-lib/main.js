//FORM CONTROLLER
function FormCtr($scope,$rootScope) {
    $scope.data = { }
    $scope.submit = function(){
        //after submitting the form, why does the 'result' controller now live update?  
        if($scope.madfields.$valid) { 
            $rootScope.formView = false;
            $rootScope.$broadcast('displayData', $scope.data);
        }
        /* or perhaps?
            angular.forEach($scope.madfields.$error.required, function(field,key){
                //add class?
            });
        */
    };
};

//RESULTS CONTROLLER
function ResultCtr($scope,$rootScope) {
    $scope.$on('displayData', function(event, data) {
        $scope.results = data;
    });
    $scope.toggleForm = function(){
        $rootScope.formView = true;
    }
};

angular.module('madlib',['ngSanitize','ngAnimate'])
    .filter('wrap',function(){
        return function(input){
            if(input) return "<b>" + input + "</b>";
        }
    })
    .filter('titlecase',function(){
        return function(input){
            return input.replace(/(?:^|\s)\w/g, function(match) {
                return match.toUpperCase();
            });
        }
    })
    .controller('form', ['$scope','$rootScope', FormCtr])
    .controller('result', ['$scope','$rootScope', ResultCtr])
    //.controller('FACtr', ['$scope','$rootScope', FACtr])
        

$(function () {
    $('.wrapper').fadeIn(); 
    $('.face').css('bottom','-50px');
});