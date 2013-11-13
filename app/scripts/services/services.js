angular.module('nutrientDataApp.services', []).
	factory('filterService', function() {
		return {
			searchText: ''
		};
	}).
	factory('resourceService', function(){
		'use strict';
		var contextPath = function() {
			return 'http://localhost\:8090';
		};

		return { contextPath: contextPath };
	}).
	service('foodService', function($http, $q, resourceService){
		'use strict';

		this.foodList = function() {
			var promise = $q.defer();
			$http({
				method: 'GET',
				url: resourceService.contextPath() + '/food'
			}).
				success(function(foodDescriptions){
					promise.resolve(foodDescriptions);
				}).
				error(function(data, status) {
					promise.reject(status);
				});
			return promise.promise;
		};
	});