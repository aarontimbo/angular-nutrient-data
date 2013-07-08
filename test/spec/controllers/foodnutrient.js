'use strict';

describe('Controller: FoodNutrientCtrl', function () {

  // load the controller's module
  beforeEach(module('nutrientDataApp'));

  var FoodNutrientCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FoodNutrientCtrl = $controller('FoodNutrientCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of food nutrients to the scope', function () {
    expect(scope.nutrients.length).toBe(3);
  });
});
