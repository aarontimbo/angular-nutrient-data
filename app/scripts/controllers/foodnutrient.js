'use strict';

angular.module('nutrientDataApp')
  .controller('FoodNutrientCtrl', function ($scope, $http) {
    $http.get('http://localhost\:8090/nutrient/1001').success(function(data){
    	$scope.nutrients = data;	
    });
    
  });
