var htbaApp = angular.module('htbaApp', ['ngResource']).config(function($httpProvider) {
		$httpProvider.defaults.headers.post['Content-Type'] = 'application/json';
    }
);

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

htbaApp.factory('MeditationService', function(m) {
	Meditation.save(m, function(resource) {
		console.log(resource);
		return newMeditationInstance;
	}, function(response) {
		console.log("Error: " + response.status);
	});
});

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
		{name: 'Normal'},
		{name: 'Excited'},
		{name: 'Angry' },
		{name: 'Tired'},
		{name: 'Relaxed'},
		{name: 'Stressed'},
		{name: 'Terrible'},
		{name: 'Sad'}
	];
	$scope.feeling = $scope.feelings[0];
	$scope.selectFeeling = function(f) {
		$scope.newFeeling = { feeling_desc: f.name };
		// $scope.newFeeling.feeling_desc = f.name;
		Feeling.save($scope.newFeeling, function(resource) {
	      console.log(resource)
	    }, function(response) {
	      console.log("Error: " + response.status);
	    });
	};
}]);