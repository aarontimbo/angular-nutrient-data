'use strict';

angular.module('nutrientDataApp')
  .controller('FoodCtrl', function ($scope, $http, filterService) {
    $http.get('http://localhost\:8090/food').success(function(data){
    	$scope.filterService = filterService;
    	$scope.foods = data;	
    });


    // Filter all foods by text description
    $scope.filterFoods = function() {
    	$http.get('http://localhost\:8090/food/filter/' + $scope.foodDescription.description).success(function(data){
    		$scope.filteredFoods = data;	
    	});
    }
    
  });
