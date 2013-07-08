'use strict';

angular.module('nutrientDataApp', [])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/nutrients', {
        templateUrl: 'views/nutrients.html',
        controller: 'FoodNutrientCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
