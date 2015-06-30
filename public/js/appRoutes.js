angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider

    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'MainController'
    })

    // .when('/travelers', {
    //   templateUrl: 'views/traveler.html',
    //   controller: 'TravelerController'
    // })

  $locationProvider.html5Mode(true);
}]);