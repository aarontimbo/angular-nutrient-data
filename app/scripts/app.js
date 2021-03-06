'use strict';

angular.module('nutrientDataApp', ['ngRoute','nutrientDataApp.services','ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/foods', {
        templateUrl: 'views/foods.html',
        controller: 'FoodCtrl'
      })
      .when('/nutrients', {
        templateUrl: 'views/nutrients.html',
        controller: 'FoodNutrientCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
