angular.module('nutrientDataApp.services', ['config']).
	factory('filterService', function() {
		return {
			searchText: ''
		};
	}).
	factory('resourceService', function(ENV){
		'use strict';
		var contextPath = function() {
			return ENV.apiEndpoint;
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