'use strict';

angular.module('nutrientDataApp')
  .controller('FoodNutrientCtrl', function ($scope, $http) {
  	$scope.foodDescription = { id: '', description: '' };
  	$scope.results = {};

  	$scope.searchNutrients = function() {
	    $http.get('http://localhost\:8090/nutrient/?foodId=' + $scope.foodDescription.id + '&definitionId=203').success(function(data){
	    	$scope.results = data;	
	    });
  	}
    
  });
