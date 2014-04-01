'use strict';

angular.module('nutrientDataApp')
  .controller('FoodCtrl', function ($scope, $http, filterService, ENV) {
    $http.get(ENV.apiEndpoint + '/food').success(function(data){
    	$scope.filterService = filterService;
    	$scope.foods = data;	
    });


    // Filter all foods by text description
    $scope.filterFoods = function() {
        $http.get(ENV.apiEndpoint + '/food/filter/' + $scope.foodDescription.description).success(function(data){
    		$scope.filteredFoods = data;	
    	});
    }
    
  });
