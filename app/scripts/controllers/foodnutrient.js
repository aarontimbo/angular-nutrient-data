'use strict';

angular.module('nutrientDataApp')
  .controller('FoodNutrientCtrl', function ($scope, $http) {
  	$scope.foodDescription = { id: '', description: '' };
  	$scope.nutrientDefinition = { id: '203', description: 'Protein' };

  	// Get nutrient definitions
  	$http.get('http://localhost\:8090/nutrientDefinition').success(function(data, status, headers, config){
  		$scope.nutrientDefinitions = data;
  	});
  	$scope.results = {};

  	function updateResults(data) {
  		$scope.results = data;	
  	} 

  	function hasErrors(data) {
  		$scope.results.errors = data;	
  	} 

  	$scope.updateNutrientInfo = function() {
  		if ($scope.foodDescription) {
  			$scope.searchNutrients();
  		}
  	}

  	$scope.searchNutrients = function() {
	    $http.get('http://localhost\:8090/nutrient/?foodId=' + $scope.foodDescription.id + '&definitionId=' + $scope.nutrientDefinition.id)
	    	.success(updateResults)
	    	.error(hasErrors);
  	}
    
  });
