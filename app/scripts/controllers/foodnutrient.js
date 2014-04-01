'use strict';

angular.module('nutrientDataApp')
  .controller('FoodNutrientCtrl', function ($scope, $http, foodService, ENV) {
    $scope.foodWeight = {};
    $scope.weights = {};  
    $scope.amount = 1;

  	// Get nutrient definitions
  	//$http.get('http://localhost\:8090/nutrientdefinition').success(function(data, status, headers, config){
    //$http.get('http://nutrient-data-service.herokuapp.com/nutrientdefinition').success(function(data, status, headers, config){
    $http.get(ENV.apiEndpoint + '/nutrientdefinition').success(function(data, status, headers, config){
  		$scope.nutrientDefinitions = data;
  	});
    
    // Get foods from service
    $scope.loadFoodList = function() {
      foodService.foodList().then(function(foodList) {
        $scope.food = foodList;
      });
    };

    $scope.loadFoodList();

  	function updateResults(data) {
  		$scope.results = data;	
      // calculate nutrient value for selected food weight
      $scope.nutrientValue = $scope.amount * data.amountPer100Grams * $scope.foodWeight.gramWeight / 100;
  	} 

    function updateWeights(data) {
      $scope.weights = data;  
    } 

  	function hasErrors(data) {
  		$scope.results.errors = data;	
  	} 

  	$scope.updateNutrientInfo = function() {
  		if ($scope.foodDescription && $scope.nutrientDefinition) {
  			$scope.searchNutrients();
  		}
  	}

    $scope.updateFoodWeights = function() {
      if ($scope.foodDescription) {
        //$http.get('http://localhost\:8090/weight/' + $scope.foodDescription.id)
        //$http.get('http://nutrient-data-service.herokuapp.com/weight/' + $scope.foodDescription.id)
        $http.get(ENV.apiEndpoint + '/weight/' + $scope.foodDescription.id)
          .success(updateWeights)
          .error(hasErrors);
      }
    }

  	$scope.searchNutrients = function() {
      // Get food nutrient data filtered by food description id and nutrient definition (e.g. protein, fat, calories, etc.)
	    //$http.get('http://localhost\:8090/nutrient/?foodId=' + $scope.foodDescription.id + '&definitionId=' + $scope.nutrientDefinition.id)
      //$http.get('http://nutrient-data-service.herokuapp.com/nutrient/?foodId=' + $scope.foodDescription.id + '&definitionId=' + $scope.nutrientDefinition.id)
      $http.get(ENV.apiEndpoint + '/nutrient/?foodId=' + $scope.foodDescription.id + '&definitionId=' + $scope.nutrientDefinition.id)
	    	.success(updateResults)
	    	.error(hasErrors);
  	}
    
  });
