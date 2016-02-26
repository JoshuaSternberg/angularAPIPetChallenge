var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {

    $routeProvider
        .when('/animalOne', {
            templateUrl: '/views/templates/animalOne.html',
            controller: 'AnimalOne'
        })
        .when('/animalTwo', {
            templateUrl: '/views/templates/animalTwo.html',
            controller: 'AnimalTwo'
        })
        .when('/animalThree', {
            templateUrl: '/views/templates/animalThree.html',
            controller: 'AnimalThree'
        })
        .otherwise({
            redirectTo: 'AnimalOne'
        });
}]);