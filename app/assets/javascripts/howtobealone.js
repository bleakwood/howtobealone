var htbaApp = angular.module('htbaApp', ['ngResource']);

htbaApp.controller('MeditationsCtrl', ['$scope', 'Meditation', function($scope, Meditation) {
	$scope.heading = "How to Be Alone";
	$scope.meditations = Meditation.query();
}]);

htbaApp.factory('Meditation', ['$resource', function($resource) {
	return $resource('/meditations');
}]);

htbaApp.factory('Feeling', ['$resource', function($resource) {
	return $resource('/feelings');
}]);

htbaApp.controller('FeelingsCtrl', ['$scope', 'Feeling', function($scope, Feeling){
	$scope.create = function () {
		Feeling.save($scope.newFeeling, function(resource) {
	      $scope.feelings.push(resource)
	      $scope.newFeeling = {}
	    }, function(response) {
	      console.log("Error: " + response.status);
	    });
	};

	$scope.feelings = [
		{name: 'Happy'},
		{name: 'Angry' },
		{name: 'Relaxed'},
		{name: 'Sad'}
	];
	$scope.feeling = $scope.feelings[0];
	$scope.selectedFeeling = function() {

	};
}]);