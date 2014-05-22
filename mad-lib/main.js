//on focus of input field, highlight the model output
//is there a controller 'this'?
//apply ng-bind-html to the controller so that all data bindings are html ready?
//data binding inheritance is curious
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
    .controller('wrapper',function ($scope){ 
        $scope.data = {
            /* scope data shouldn't be defined here in this specific case 
                century:null,
                adj1:null,
                adj2:null,
                location:null,
                name:null,
                verb:null,
                university:null,
                occupation:null,
                verb2:null,
                adj3:null
            */
        }
        $('.wrapper').fadeIn();
        $('.face').css('bottom','-50px');
    });
        