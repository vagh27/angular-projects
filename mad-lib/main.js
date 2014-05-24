angular.module('madlib',['ngSanitize'])
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

    //FORM CONTROLLER
    .controller('form',function ($scope,$rootScope){ 
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
    })

    //RESULTS CONTROLLER
    .controller('result',function ($scope,$rootScope){
        $scope.$on('displayData', function(event, data) {
            $scope.results = data;
        });
        $scope.toggleForm = function(){
            $rootScope.formView = true;
        }
    })

    //SUPERFLUOUS RUN FUNCTION
    .run(function($rootScope) { 
        $rootScope.formView = true; //can also be defined in ng-init, outside of the controllers...for some reason

        //would you bake this into angular or just create a normal jquery onready - since it has nothing to do with angular?
        $('.wrapper').fadeIn(); 
        $('.face').css('bottom','-50px');
    });
        